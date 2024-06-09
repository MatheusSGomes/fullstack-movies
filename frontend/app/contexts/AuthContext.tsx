'use client';

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

        console.log(movies_app_token);
    }, []);

    return (
        <AuthContext.Provider value="">
            {children}
        </AuthContext.Provider>
    );
}