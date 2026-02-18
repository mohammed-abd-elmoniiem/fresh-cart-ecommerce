import { fetchSubCategories } from '@/src/features/home/categories/categories.actions'
import SubCategoriesScreen from '@/src/features/home/categories/subCategoryScreen'
import React from 'react'
import { toast } from 'react-toastify'

export default async function Subcategories({ params }:{params:Promise<{ subcategoryId: string }>} ) {

   const p = await params
   console.log(p)
   

    
  return (
    <div className='container mx-auto'>
  
      <SubCategoriesScreen subcategoryId={p.subcategoryId} />
    </div>
  )
}
