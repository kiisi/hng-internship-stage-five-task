import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "../styles/globals.css";
import ReactQueryProvider from "@/lib/utils/react-query";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "@/contexts/user";
import { LinkProvider } from "@/contexts/links";

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'],
})


export const metadata: Metadata = {
  title: "Devlinks",
  description: "Devlinks - Made with 💗 Destiny Felix Kiisi🔥",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <ReactQueryProvider>
          <UserProvider>
            <LinkProvider>
              {children}
              <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                  duration: 2500,
                }}
              />
            </LinkProvider>
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

function Auth({
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