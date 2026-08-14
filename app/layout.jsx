import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://rajniwoodart.netlify.app"),

  title: {
    default: "Rajni Wood Art | Premium Wooden Furniture",
    template: "%s | Rajni Wood Art",
  },

  description:
    "Rajni Wood Art offers premium wooden furniture, quality craftsmanship, and elegant wood designs. Explore our work, read customer reviews, and get in touch with us.",

  keywords: [
    "Rajni Wood Art",
    "Rajni Wood Art furniture",
    "wooden furniture",
    "wood furniture",
    "premium wooden furniture",
    "custom wooden furniture",
    "wood art",
    "wood furniture reviews",
  ],

  alternates: {
    canonical: "https://rajniwoodart.netlify.app/",
  },

  openGraph: {
    title: "Rajni Wood Art | Premium Wooden Furniture",
    description:
      "Explore premium wooden furniture and beautiful wood craftsmanship by Rajni Wood Art.",
    url: "https://rajniwoodart.netlify.app/",
    siteName: "Rajni Wood Art",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Rajni Wood Art | Premium Wooden Furniture",
    description:
      "Explore premium wooden furniture and beautiful wood craftsmanship by Rajni Wood Art.",
  },

  robots: {
    index: true,
    follow: true,
  },

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
