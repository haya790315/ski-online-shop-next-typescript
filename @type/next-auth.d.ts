import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    password: string;
    email: string;
    authorization: "ADMIN" | "VIP" | "USER" | "BLOCK";
    createdAt: Date;
    formatCreatedAt: string;
    updateAt: Date;
    formatUpdatedAt: string;
    passwordChangedAt: Date;
    passwordResetToken: string;
    passwordResetExpires: Date;
    address: string;auth
  }
  interface Session {
    user: User & DefaultSession["user"];
  }

}
