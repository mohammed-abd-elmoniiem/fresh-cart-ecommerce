

'use server'
import "./globals.css";
import { Roboto } from 'next/font/google'
import 'flowbite-react'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import NavBar from "../components/shared/navbar/NavBar";
import Footer from "../components/shared/footer/Footer";
import Providers from "../providers";
import { useDispatch } from "react-redux";
import { fetchUserInfo } from "../features/login/reducers/authReducer";



config.autoAddCss = false


const roboto = Roboto({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 



   


  return (
    <html lang="en">
      <body
        className={`${roboto.className} px-1`}
      >
        <Providers >

          <NavBar />
          {children}

          <Footer />
        </Providers>




      </body>
    </html>
  );
}
