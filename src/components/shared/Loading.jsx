


import React from 'react'
import Svg from './svg/Svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function Loading() {

    gsap.registerPlugin(useGSAP)

    const center = {
        x:110,
        y:110
    }
    useGSAP(()=>{
        gsap.to('svg circle.circle',{
            duration:0.3,
            opacity:0,
            
            stagger:{
                each:0.1,
                
            },
            yoyo:true,
            repeat:-1,
            
        })
    })

    function createCireclesPoints(n,distance){
        const arrPoints = []

        const phase = (1/n)*Math.PI
        for (let i = 0; i < n; i++) {
            arrPoints.push({
                x:distance * Math.cos((i/n)*Math.PI*2 + phase ),
                y:distance * Math.sin((i/n)*Math.PI*2 + phase)
            })
            
        }

        return arrPoints
    }

    function createCircles(n,rad , distance ){

        return createCireclesPoints(n,distance).map(point=> <circle key={` ${Math.random() + point.x}`} className={`circle transform-fill text-primary-c`} cx={point.x + center.x} cy={point.y +center.y}  fill="" r={rad}/>)

    }
  return (
    <div

    className='centered'
    
    >
        <svg className=' w-55 h-55'>
            {createCircles(1,16, 0)}


            {createCircles(8,8, 25)}
            {createCircles(24,4 , 37)}
            {createCircles(20,2 , 45)}




        </svg>
        
        </div>
  )
}
