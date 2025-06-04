"use client"

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

export const AuthSessionProvider = (props: { children: ReactNode }) => {
    return <SessionProvider>{props.children}</SessionProvider>
};
