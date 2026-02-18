import React from 'react'
import { Button } from 'flowbite-react';
import { newUser } from '@/src/features/signup/types';
import SignUpForm from '@/src/features/signup/components/form';
import Welcome from '@/src/features/signup/components/welcome';


export default function Signup() {

  








  return (
   <div className="">
  <section className="container mx-auto text-black min-h-screen   flex flex-col items-center justify-center ">
    <div className="flex flex-col items-center justify-center bg-white  rounded-2xl p-2 w-full">
      
      <div className="w-full bg-white  border border-white flex flex-col md:flex-row items-center justify-center md:justify-center gap-2">

        <Welcome  />
        
         
         <SignUpForm/>
      
      </div>
    </div>
  </section>
</div>

  )
}
