import "../css/globals.css"

export const metadata = {
  title: "Nuis News",
  description: "All rounder news portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
