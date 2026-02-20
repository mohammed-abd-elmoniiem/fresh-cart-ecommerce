import CreateNewPasswordForm from '@/src/features/createNewPassword/createNewPasswordform'
import React from 'react'

export default async function Page({params}:{params:Promise<{code:string}>}) {

    const {code} = await params
    console.log(code)
  return (
   
    <div className="container mx-auto flex items-center justify-center">
        <CreateNewPasswordForm code={code}/>
    </div>
  

  )
}
