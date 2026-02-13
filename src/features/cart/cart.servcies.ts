import { toast } from "react-toastify"
import { addToCart } from "./cart.actions"

export const addProductToCart = async (id:string):Promise<void>=>{
  
      try{
        const response = await addToCart(id)
        toast.success('product added to cart')
        console.log(response)
        
      }catch(error){
        toast.error('Failed to add product to cart')
      }
    }