"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Session Data</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <button onClick={() => signIn("google")}>Sign In</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
