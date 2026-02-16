export type Address ={
    _id?:string
    name:string,
    details:string,
    city:string,
    phone:string,
    
}



export interface responseAddresses   {
status: string,
  message: string,
  data:Address []
}


