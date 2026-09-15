import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Emmitti Emmitto | Nurturing Future Winners",
  description: "Mixed Day & Boarding in Iganga. Knowledge is Light. Est 2005",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}