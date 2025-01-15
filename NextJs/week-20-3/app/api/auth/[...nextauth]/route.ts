
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        return {
          username: "Abhishek",
          id: "1",
          email: "nodix@gmail.com"
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;
