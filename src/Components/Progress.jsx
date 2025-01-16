import React from 'react'
import { useSelector } from 'react-redux'
export default function Progress() {
    const {numQuestions, index} = useSelector(state => state.quiz);
  return (

    <progress value = {index + 1} max={numQuestions} className='w-[90%] bg-black dark:bg-white md:w-[70%] lg:w-[40%] text-black dark:text-white'>Progress</progress>
    
  )
}
