import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import "./globals.css";

export const metadata = {
  title: "InfluCard",
  description: "...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </head>
      <body>
        <div className="layout">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
