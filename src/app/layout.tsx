
import "./globals.css";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import {Roboto} from 'next/font/google'

import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from "../components/shared/navbar/NavBar";
import Footer from "../components/shared/footer/Footer";

config.autoAddCss =false


const roboto = Roboto({
  subsets:['latin-ext'],
  weight:['100','200','300','400','500','600','700','800','900']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >

        <NavBar/>
        {children}

        <Footer/>


        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
/>
      </body>
    </html>
  );
}
