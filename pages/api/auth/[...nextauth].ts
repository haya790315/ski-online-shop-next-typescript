import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "lib/mongodb/mongoose";
import userSchema from "model/userSchema";
import type { ICredentials } from "@type/nextAuth";

export default NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials) {
        dbConnect();
        const { email, password } = credentials as ICredentials;
        //  Check if email and password exist

        if (!email || !password) {
          throw new Error("no email or password");
        }
        //  Check if user exists && password is correct
        const user = await userSchema.findOne({ email });

        if (!user || !(await user.checkPassword(password, user.password))) {
          return null;
        } else {
          return user;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.userName as string;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.id = token.id;
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
