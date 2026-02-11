

'use server'
import { cookies } from "next/headers";



export async function setToken (token:string ,rememberMe:boolean):Promise<void>{

const cookieStore = await cookies();

cookieStore.set('token',token,{
    httpOnly:true,
    maxAge:(rememberMe? 30 : 1 )*24*60*60
})

}

export async function getToken (token:string):Promise<string|null>{

const cookieStore = await cookies();

return cookieStore.get('token')?.value || null

}

export async function removeToken (token:string ):Promise<void>{
const cookieStore = await cookies();
 cookieStore.delete('token')

}