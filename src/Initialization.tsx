'use client'

import React from 'react'
import useStore from './store/useStore'

export default function Initialization({children}:{children:React.ReactNode}) {

    useStore()
 
  return (
    <>
    {
        children
    }

    </>
  )
}
