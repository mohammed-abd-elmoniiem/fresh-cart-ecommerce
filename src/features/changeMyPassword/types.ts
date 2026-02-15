export type ChangeMyPasswordFormValues ={
   
    currentPassword:string,
    password:string,
    rePassword:string,

    
}


export type returnResponseType  = {

                  message: string,
                     user: {
                        name: string,
                        email: string,
                        role: string
                     }
}