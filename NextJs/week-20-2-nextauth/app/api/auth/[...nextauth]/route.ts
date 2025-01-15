import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "nodix@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        //DB requestr to check if this username and password are correct.
        const user = {
          name: "Nodix",
          id: "1",
          username: "nodix@gmail.com"
        }

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ]
})

export const GET = handler;
export const POST = handler;
