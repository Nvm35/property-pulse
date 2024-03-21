import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find where to sleep",
  description: "Pay money, sleep honey",
  keywords: "rental, find live, find home, find hotel, find property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>;
      </body>
    </html>
  );
};

export default MainLayout;
