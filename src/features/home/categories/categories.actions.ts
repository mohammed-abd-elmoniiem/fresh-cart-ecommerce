
'use server'

import axios, { AxiosRequestConfig } from "axios"
import { Category } from "./categoreies.types"
import { productData } from "@/src/utils/types"

export async function fetchCategories(): Promise<Category[] | null > {
  

  const options:AxiosRequestConfig ={
    url:'https://ecommerce.routemisr.com/api/v1/categories',
    method:'GET'    
  }

  try{
    const response = await axios.request(options)
    console.log('Fetched categories:', response.data.data)
    return response.data.data
  }catch(error){
    console.error('Error fetching categories:', error)
       
       return null
  }
}


export async function fetchSpecificCategory(categoryId: string): Promise<Category | null > {

  const options:AxiosRequestConfig ={
    url:`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`,
    method:'GET'    
  }

  try{
    const response = await axios.request(options)
    console.log('Fetched categories:', response.data.data)
    return response.data.data
  }catch(error){
    console.error('Error fetching categories:', error)
       
       return null
  }
}



export async function fetchSubCategories(categoryId: string): Promise<Category[] | null > {

  const options:AxiosRequestConfig ={
    url:`https://ecommerce.routemisr.com/api/v1/subcategories`,
    method:'GET'
  }

  try{
    const response = await axios.request(options)
    console.log('Fetched subcategories:', response.data)
    return response.data.data
  }catch(error){
    console.error('Error fetching subcategories:', error)

    return null
  }
}


export async function getAllProductsInSubcategory(subcategory: string):Promise<productData[]>{


    const option:AxiosRequestConfig ={
        url:`https://ecommerce.routemisr.com/api/v1/products?category[in]=${subcategory}`,
        method:'GET'
    }

    try{
    const response= await axios.request(option);

    console.log('products in sub category response action', response?.data.data)

    return response?.data.data

    }catch(error){
       return  []
    }


}

 