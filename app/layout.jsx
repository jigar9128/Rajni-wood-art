import "./globals.css";

export const metadata = {
  title: "Rajnish Wood Art Reviews",
  description: "Customer Reviews",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
