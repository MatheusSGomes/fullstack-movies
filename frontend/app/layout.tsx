import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movies App",
  description: "Cadastre filmes e séries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <div className="bg-base-100">
            <div className="navbar max-w-4xl mx-auto px-3">
              <div className="navbar-start">
                <Link href="/" className="text-2xl font-bold">Filmes</Link>
              </div>
              <div className="navbar-end gap-3">
                <Link href="/movies" className="btn">Filmes</Link>
                <Link href="/users" className="btn">Usuários</Link>
                <Link href="/login" className="btn">Logout</Link>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-4 px-3">
            {children}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
}
