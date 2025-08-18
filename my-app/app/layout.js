import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { ThemeContextProvider } from "./context/ThemeContext";
import ThemeProvider from "./providers/ThemeProvider";

const inter = Inter({ subset: ["latin"] });

export const metadata = {
  title: "Scofield Dev Blog",
  description: "Top Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="br-pt">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className="container">
            <div className="wrapper">
              <Navbar />
              {children}
              <Footer />
            </div>            
          </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
