import React from 'react'
import { useSelector } from 'react-redux'
export default function Loading() {
  return (
    <section id = "loading-page" className="transition-all duration-200 dark:bg-black min-h-screen flex justify-center">
        <div className="container p-6 mx-auto">
            <div className="flex flex-col items-center">
                <h1 className='text-2xl font-sans md:text-4xl font-semibold dark:text-white'>Loading...</h1>
           
            </div>
        </div>
            
           


        
    </section>
   
  )
}
