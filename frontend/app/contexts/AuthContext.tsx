'use client';

import { recoverUserInformation } from "@/api";
import { parseCookies } from "nookies";
import { createContext, ReactNode, useEffect, useState } from "react";

interface Props {
    children?: ReactNode
}

export const AuthContext = createContext({})

export function AuthProvider({ children }: Props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const { movies_app_token } = parseCookies();

        if (movies_app_token) {
            recoverUserInformation()
                .then(response => {
                    setUser(response.data);
                })
        }

    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
}