import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import UserProvider from "./context/user";
import CartProvider from "./context/cart";
export const metadata = {
  title: "Ebay Clone",
  description: " created by zubair",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ToastContainer />
        {/* now all user info is present thorugh out the appliacation */}
        <UserProvider>
          <CartProvider>

          {children}
          </CartProvider>
          
          </UserProvider> 
      </body>
    </html>
  );
}

