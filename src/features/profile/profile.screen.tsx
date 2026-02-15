'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profileImage from '../../assets/images/review-author.png'
import Image from 'next/image'
import { faCamera, faGear, faGears } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { stateStype, storeType } from '@/src/store/reduxStore/reduxStore'
import Link from 'next/link'
export default function ProfileScreen() {

    const authData = useSelector((state:stateStype)=>state.authReducer)


    
  return (
    <div className='dark:text-white mx-auto flex flex-col justify-center  items-center gap-4 text-center py-9'>
        
        <div className="img w-44 aspect-square rounded-full  outline-2 text-stone-700  p-2 relative">
            <Image className='bg-neutral-300 w-full h-full object-cover rounded-full border border-stone-700 aspect-square   overflow-hidden animating' src={profileImage} alt="profile img" />

            <div className="absolute -bottom-3 translate-x-1/2 left-1/2  p-2 text-primary-c text-3xl centered aspect-square border text-main rounded-full bg-white  group">
                <FontAwesomeIcon icon={faCamera}/>
                <p className="text-sm font-light absolute top-full w-32 bg-white rounded-md text-primary-c border origin-top scale-0 group-hover:scale-100 transition-all duration-300">update profile image</p>
             
             </div>

             <div className="absolute -top-1 -left-2  text-lg flex items-center   p-2 aspect-square border text-main rounded-full bg-white  group" 
             onClick={() => {}

             }>
                <FontAwesomeIcon icon={faGear}/>
                <p className="text-sm font-light absolute top-full w-32 bg-white rounded-md text-main border origin-top scale-0 group-hover:scale-100 transition-all duration-300">Change Password</p>
             </div>
        </div>

        {
            !authData.isAuthentication ?<>

             <div className="flex flex-col justify-center items-center  gap-4 ">

                        <p className="py-3 text-stone-900">
                            you must login first ?!!!
                        </p>

                        <div className="flex gap-4 items-center">
                            <Link className=' py-2 px-6 bg-main text-white rounded-md shadow-lg' href={'/login'}>login</Link>
                            <Link className=' py-2 px-6 bg-main text-white rounded-md shadow-lg'  href={'/signup'}>sign up</Link>

                        </div>
        </div>
            
            
            </>
            
           :<>
         <div className=" text-stone-800">
            <h2 className="uppercase text-3xl ">{authData.userInfo?.name}</h2>
             <p className="text-sm font-light"> {authData.userInfo?.email}</p>
             
             <p className="text-sm font-light"> {authData.userInfo?.id}</p>
        </div>
        </>
        }
       

    </div>
        

       
  )
}
