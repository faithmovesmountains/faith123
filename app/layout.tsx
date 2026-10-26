import type { Metadata } from "next";
import "./styles.css";
import "./enhancements.css";
import "./decision-tools.css";

export const metadata: Metadata = {
  title: "Dinner Near Us",
  description: "Takeaway ideas for a family dinner in Singapore."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
