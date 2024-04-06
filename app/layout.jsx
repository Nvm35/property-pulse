import "@/assets/styles/global.css";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find where to sleep",
  description: "Pay money, sleep honey",
  keywords: "rental, find live, find home, find hotel, find property",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
