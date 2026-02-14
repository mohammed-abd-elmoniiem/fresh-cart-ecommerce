'use client'

import React from 'react'
import { ToastContainer, toast,Bounce } from 'react-toastify';
import { store} from './store/reduxStore/reduxStore';
import {Provider} from 'react-redux'
import useStore from './store/useStore';
import Initialization from './Initialization';
import {QueryClient , QueryClientProvider} from '@tanstack/react-query'

 export const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        staleTime: 1000 * 60 * 5, // 5 minutes
        // cacheTime: 1000 * 60 * 10, // 10 minutes
      }
    }
  })


export default  function Providers({children}:{children:React.ReactNode}) {

 

  

  

  return (
    <>

    <QueryClientProvider client={queryClient}>
      <Provider store={store} >
        <Initialization>

         {children}
      </Initialization>
      
     
    
     
       
    </Provider>
    </QueryClientProvider>
    

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
