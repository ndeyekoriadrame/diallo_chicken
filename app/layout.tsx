import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Diallo Chicken",
  description: "E-commerce de poulets et d'œufs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-50">
        <Header />
       <div className="pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
