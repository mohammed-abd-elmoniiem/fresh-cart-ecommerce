'use server'
import axios, { AxiosRequestConfig } from "axios";
import { singleProduct } from "./SingleProducts.type";



export async function getSingleProduct(id:string):Promise<singleProduct |null > {


    const options:AxiosRequestConfig={
        url:`https://ecommerce.routemisr.com/api/v1/products/${id}`,
        method:"GET"
    }

    try{
        const response = await axios.request(options);
        console.log(response.data.data) 
        return response.data.data;
    }
    catch(error){

        return null
    }
}