import React from 'react'
import { fetchCategories, fetchSpecificCategory, fetchSubCategories } from './categories.actions'
import CategoriesCard from './categoriesCard'
import SubCategoriesCard from './subCategoryCard'

export default async function SubCategoriesScreen({subcategoryId}: {subcategoryId: string}) {

    const response = await fetchSubCategories(subcategoryId)
   

    if(!response){}
    console.log('categories response', response)

    

  return (
    <div className='container mx-auto '>
        <p className="">home/category/subcategories</p>


{/* 
      <div className={`bg-[url('${responseSpecificCategory?.image }')] relative w-full h-60 rounded-lg overflow-hidden shadow-sm mb-6 `}>
        subCategories of category {subcategoryId}
      </div> */}

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          response != null ?
          response.map(category => ( 
            <SubCategoriesCard key={category._id}  category={category} />
          ))
          :
          <p>No categories found</p>
        }
      </div>
    </div>
  )
}
