import React from 'react'

import { filter } from '../data/Data'
import { cartigory } from '../data/Data'

export default function Cartigory
() {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4 mt-6 p-8'>
        
        {cartigory.map((val,index) =>{
            const {text} = val
           return (
            <div  key={index}>
            <button 
            className="px-3 py-1 transition text-white duration-500 hover:scale-95 border bg-green-600 rounded-lg font-semibold text-sm">
              {text}
            </button>
          </div>
          
           )
           
        })}
        
    </div> 
  )
}