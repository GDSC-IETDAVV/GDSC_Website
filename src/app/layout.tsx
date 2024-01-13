"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AppStateProvider } from "../utils/appStateContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// export const metadata: Metadata = {
//   title: "GDSC IET DAVV",
//   description: "Google developer student club on IET DAVV",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <AppStateProvider>
        <body className={poppins.className}>{children}</body>
      </AppStateProvider>
    </html>
  );
}

// import type { Metadata } from "next";
// import "./globals.css";
// import Body from "./components/Body";

// export const metadata: Metadata = {
//   title: "GDSC IET DAVV",
//   description: "Google developer student club on IET DAVV",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <Body children={children} />
//     </html>
//   );
// }
