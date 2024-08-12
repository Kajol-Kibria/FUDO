import { Poppins } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import StoreProvider from "../../storeProvider/storeProvider";
import Message from "./Message";


const pop = Poppins({ 
  weight: ['400','500','600','700','800'],
  subsets: ["latin"] });

export const metadata = {
  title: "FUDO",
  description: "Order your smiles",
};

export default function RootLayout({ children }) {
  return (
      <StoreProvider>

    <html lang="en">
      <body className={pop.className}>
        <Message>
        <Navbar/>
        {children}
        <Footer/>
        </Message>
      </body>
    </html>
      </StoreProvider>
  );
}
