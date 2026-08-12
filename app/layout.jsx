import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Rajni Wood Art",
  description: "Premium Wooden Furniture & Interior Design",

  verification: {
    google: "4FhW7V56tvwZQBoOHrjPG1sqMgH7QOOOUK6f2lIs3Jc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
