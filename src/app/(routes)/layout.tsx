import classNames from "classnames";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../common/assets/styles/globals.css";

const inter = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
