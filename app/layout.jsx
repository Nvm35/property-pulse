import "@/assets/styles/global.css";

export const metadata = {
  title: "PropertyPulse | Find where to sleep",
  description: "Pay money, sleep honey",
  keywords: "rental, find live, find home, find hotel, find property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>;
      </body>
    </html>
  );
};

export default MainLayout;
