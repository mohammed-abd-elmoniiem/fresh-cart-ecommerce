import { RootProductData } from '@/src/utils/types';
import axios, { AxiosRequestConfig } from 'axios';
import { ca } from 'zod/v4/locales';
'use server'


export async function fetchBrandProducts(brand:string): Promise<RootProductData> {

    const options:AxiosRequestConfig = {
        method: 'GET',
        url: `https://ecommerce.routemisr.me/api/v1/products?brand=${brand}`
    }

    try{
        const response = await axios.request(options)
        return response.data

    }catch (error) {
        console.error(error)
        return {
            results: 0,
            metadata: {
                currentPage: 1,
                numberOfPages: 1,
                limit: 10,
                nextPage: 2
            },
            data: []
        }
    }
}