import React from 'react'
import { fetchCategories } from './categories.actions'
import CategoriesCard from './categoriesCard'

export default async function CategoriesScreen() {
    const response = await fetchCategories()

    if(!response){}
    console.log('categories response', response)

  return (
    <div className='container mx-auto '>
      <h1>Categories</h1>

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
