'use client'

import React from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { store } from './store/reduxStore/reduxStore';
import {Provider, useDispatch} from 'react-redux'



export default function Providers({children}:{children:React.ReactNode}) {

       
    

  return (
    <>

    <Provider store = {store}>
      <>
       {children}
     
      </>
     
       
    </Provider>
    

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
    </>
  )
}
