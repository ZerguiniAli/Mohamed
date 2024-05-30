import { useSession } from "next-auth/react";

// Define a TypeScript function to fetch the session
export async function getSession(): Promise<string | null> {
  // Fetch the session using useSession from next-auth/react
  const { data: session, status } = useSession();

  // Check if the session is loading
  if (status === "loading") {
    // Session is still loading, return null
    return null;
  }

  // Extract the offer value from the session data
  const offer = session?.user?.offer;

  // Return the offer value if it exists and is a string, otherwise return null
  return typeof offer === "string" ? offer : null;
}
