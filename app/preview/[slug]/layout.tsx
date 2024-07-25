import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Preview | Devlinks",
    description: "Devlinks - Made with 💗 Destiny Felix Kiisi🔥",
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}