import React from 'react'
import { fetchCategories } from './categories.actions'
import CategoriesCard from './categoriesCard'

export default async function CategoriesScreen() {
    const response = await fetchCategories()

    if(!response){}
    console.log('categories response', response)

  return (
    <div className='container mx-auto  '>
      <h2 className="text-xl border-l border-main  py-4">Categories</h2>

      <div className="flex flex-wrap justify-center gap-2">
        {
          response != null ?
          response.map(category => (
            <CategoriesCard key={category._id} category={category} />
          ))
          :
          <p>No categories found</p>
        }
      </div>
    </div>
  )
}
