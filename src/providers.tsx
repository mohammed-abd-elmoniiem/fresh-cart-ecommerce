'use client'

import React from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { store} from './store/reduxStore/reduxStore';
import {Provider} from 'react-redux'
import useStore from './store/useStore';
import Initialization from './Initialization';



export default  function Providers({children}:{children:React.ReactNode}) {


  

  

  return (
    <>

    <Provider store={store} >
      <Initialization>

         {children}
      </Initialization>
      
     
    
     
       
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
