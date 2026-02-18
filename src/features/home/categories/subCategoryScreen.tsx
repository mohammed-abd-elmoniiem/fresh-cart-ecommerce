'use client'
import Loading from '@/src/app/loading'
import { fetchCategories, fetchSpecificCategory, fetchSubCategories } from './categories.actions'
import CategoriesCard from './categoriesCard'
import SubCategoriesCard from './subCategoryCard'
import { useQuery } from '@tanstack/react-query'
import { is } from 'zod/v4/locales'
import toast from 'react-hot-toast'

export default  function SubCategoriesScreen({subcategoryId}: {subcategoryId: string}) {

  const  {data:subcategories , status ,error ,isLoading} = useQuery({
    queryKey:['subcategories'],
    queryFn:async()=>{
      return await fetchSubCategories(subcategoryId)
    }
  })

    // const response = await fetchSubCategories(subcategoryId)
   

    // if(!response){}
    // console.log('categories response', response)
    if(isLoading) return <Loading/>
    if(status === 'error')  {
        toast.error('error in loading subcategories')
        return <></>
       }

    if(status == 'success') console.log(subcategories)

    

  return (
    <div className='container mx-auto '>
        <p className="">home/category/subcategories</p>


{/* 
      <div className={`bg-[url('${responseSpecificCategory?.image }')] relative w-full h-60 rounded-lg overflow-hidden shadow-sm mb-6 `}>
        subCategories of category {subcategoryId}
      </div> */}

      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {
         
          subcategories?.map(category => ( 
            <SubCategoriesCard key={category._id}  category={category} />
          ))
         
        }
      </div>
    </div>
  )
}
