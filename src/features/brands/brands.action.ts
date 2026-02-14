'use server'

import axios, { AxiosRequestConfig } from "axios";
import { getToken } from "../login/cookie/tokenCookie";
import { RootBrand } from "./brands.types";


export async function fetchBrands(): Promise<RootBrand> {
    const token = await getToken()
    const option:AxiosRequestConfig ={
        url:'https://ecommerce.routemisr.com/api/v1/brands',
        method:'get',
        
    }


    try{
        const response= await axios.request(option);

        // console.log(response?.data)/

        return response?.data

        }catch(error){
            console.log(error) 

            return {
                results: 0,
                metadata: {
                    currentPage: 0,
                    numberOfPages: 0,
                    limit: 0,
                    nextPage: 0
                },
                data: []
            }

    }
    


}