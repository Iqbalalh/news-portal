import "../css/globals.css"

export const metadata = {
  title: "Nuis News",
  description: "All rounder news portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/assets/svg/logo-clr.svg" sizes="any" /></head>
      <body>{children}</body>
    </html>
  );
}
