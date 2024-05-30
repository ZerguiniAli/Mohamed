// next-auth.d.ts

// Extend the Session type to include the 'role' property
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      offer: unknown;
      id: string;
      name: string;
      email: string;
    };
  }

  // Extend the User type to include the 'role' property
  interface User {
    id: string;
    name: string;
    email: string;
  }
}
