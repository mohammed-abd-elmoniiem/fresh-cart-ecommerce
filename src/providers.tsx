'use client'

import React from 'react'
import {Toaster} from 'react-hot-toast'
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
    

        <Toaster position='top-right'/>
    </>
  )
}
