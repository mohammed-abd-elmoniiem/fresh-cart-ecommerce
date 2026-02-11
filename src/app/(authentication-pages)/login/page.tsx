import LoginForm from '@/src/features/login/components/loginform'
import Welcome from '@/src/features/login/components/welcome'
import React from 'react'

export default function Login() {
  return (
    <div className='flex items-center min-h-screen container mx-auto'>
      <Welcome/>
      <LoginForm/>
    </div>
  )
}
