import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "lib/mongodb/mongoose";
import userSchema from "model/userSchema";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "lib/mongodb/mongodb";

export default NextAuth({
  session: {
    maxAge: 60 * 60,
    strategy: "database",
  },
  adapter: MongoDBAdapter(clientPromise),
  debug: true,
  secret: process.env.NEXTAUTH_URL,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        dbConnect();
        //  Check if email and password exist

        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("no email or password");
        }
        //  Check if user exists && password is correct
        const { email, password } = credentials;

        const user = await userSchema.findOne({ email });

        if (!user || !(await user.checkPassword(password, user.password))) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  // jwt: {
  //   maxAge: 60,
  // },
  pages: {
    signIn: "/",
    error: "http://localhost:3000/",
  },
  
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
        session.user.name = token.name as string;
      }
      return session;
    },
    async signIn({ user }) {
      if (user.authorization === "BLOCK") {
        return false;
      } else return true;
    },
  },
});
