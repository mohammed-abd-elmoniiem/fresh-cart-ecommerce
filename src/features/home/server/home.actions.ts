'use server'

import { productData } from "@/src/utils/types";
import axios, { AxiosRequestConfig } from "axios";



export async function getAllProducts():Promise<productData[]>{


    const option:AxiosRequestConfig ={
        url:'https://ecommerce.routemisr.com/api/v1/products?limit=10',
        method:'GET'
    }

    try{
    const response= await axios.request(option);

    console.log(response?.data.data)

    return response?.data.data

    }catch(error){
       return  [
        {
    sold: 24096,
    images: [
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-1.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397482-2.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397483-3.jpeg',
      'https://ecommerce.routemisr.com/Route-Academy-products/1680403397485-4.jpeg'
    ],
    subcategory: [ ],
    ratingsQuantity: 2,
    _id: '6428ebc6dc1175abc65ca0b9',
    title: 'Woman Shawl',
    slug: 'woman-shawl',
    description: 'Material\tPolyester Blend\nColour Name\tMulticolour\nDepartment\tWomen',
    quantity: 225,
    price: 191,
    imageCover: 'https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg',
    category: {
      _id: '6439d58a0049ad0b52b9003f',
      name: "Women's Fashion",
      slug: "women's-fashion",
      image: 'https://ecommerce.routemisr.com/Route-Academy-categories/1681511818071.jpeg'
    },
    brand: {
      _id: '64089bbe24b25627a253158b',
      name: 'DeFacto',
      slug: 'defacto',
      image: 'https://ecommerce.routemisr.com/Route-Academy-brands/1678285758109.png'
    },
    ratingsAverage: 4.5,
    createdAt: '2023-04-02T02:43:18.400Z',
    updatedAt: '2026-02-12T16:39:27.459Z',
    id: '6428ebc6dc1175abc65ca0b9'
        }
       
        ,

]
    }


}