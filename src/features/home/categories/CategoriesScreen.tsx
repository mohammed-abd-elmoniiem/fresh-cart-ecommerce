'use client'
import React from 'react'
import { fetchCategories } from './categories.actions'
import CategoriesCard from './categoriesCard'
import { useQuery } from '@tanstack/react-query'

export default  function CategoriesScreen() {

  const { data:response , status ,isLoading ,error} = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories
  })
 

    if(isLoading) return <p>Loading...</p>
    if(status==='error') return <p>Error loading categories</p>

  return (
    <div className='container mx-auto  '>
     <h2 className='capitalize p-3 w-full text-xl bg-main/5 border-main border-l-8'>categories</h2>

      <div className="flex flex-wrap justify-center gap-2 py-6">
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
