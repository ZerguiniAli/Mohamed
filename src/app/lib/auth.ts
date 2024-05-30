// authOptions.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const adapter = PrismaAdapter(prisma);

export const authOptions: NextAuthOptions = {
  adapter: adapter,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await prisma.inscription.findUnique({
          where: { Email: credentials.email },
        });
        if (!existingUser) {
          return null;
        }
        const passwordMatch = await compare(credentials.password, existingUser.MotdePase);
        if (!passwordMatch) {
          return null;
        }
        return {
          id: `${existingUser.id}`,
          name: existingUser.Nomutil,
          email: existingUser.Email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
};
