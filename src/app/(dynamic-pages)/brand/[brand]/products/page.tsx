


import React from 'react'

export default async function page({params}:{params:Promise<{brand:string}>}) {

    const {brand} = await params

    
  return (
    <div>page</div>
  )
}
