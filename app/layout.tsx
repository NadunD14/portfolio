import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Nadun Sandanayaka - Full Stack Developer",
    description: "A passionate full-stack developer with a strong focus on building scalable, data-driven applications and leveraging cloud technologies to solve real-world challenges.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
