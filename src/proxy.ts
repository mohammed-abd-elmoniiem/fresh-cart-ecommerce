
import { NextRequest, NextResponse } from "next/server";
import toast from "react-hot-toast";
const authRoute = ['/profile','/cart','/checkout','/change-my-password',
    '/allorders','/order','/wishlist'
]

export   function proxy(request: NextRequest) {
  const { url} = request;
   console.log('proxy')
  const {pathname} = request.nextUrl

  const token =  request.cookies.get('token')?.value ||null

  const isProtectedRoute = authRoute.some(route=> pathname === route || pathname.includes(route))

  console.log(isProtectedRoute ,!!token)

  if(!token && isProtectedRoute){
    console.log('token exists, allowing access to protected route')
 


    return NextResponse.redirect( new URL('/login',url))
  }

  return NextResponse.next()
}