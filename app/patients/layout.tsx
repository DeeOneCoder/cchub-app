import type { Metadata } from "next";
import Header from "../components/header";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function FirstLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: "relative" }}>
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
