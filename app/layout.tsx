import type { Metadata } from "next";
import "./styles.css";
import "./enhancements.css";
import "./decision-tools.css";
import "./family-theme.css";

export const metadata: Metadata = {
  title: "Tiny Tummies Decide",
  description: "Family-friendly takeaway ideas for dinner in Singapore."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
