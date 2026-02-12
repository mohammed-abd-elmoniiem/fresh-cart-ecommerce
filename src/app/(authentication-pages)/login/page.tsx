import LoginForm from '@/src/features/login/components/loginform'
import Welcome from '@/src/features/login/components/welcome'
import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center justify-center gap-4 p-8 container mx-auto'>
      <Welcome/>
      <LoginForm/>
    </div>
  )
}
