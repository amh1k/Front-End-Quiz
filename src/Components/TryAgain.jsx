import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '../features/quizSlice';
export default function TryAgain() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(reset());

    }
  return (
    <button className='p-4 bg-white flex flex-col justify-start items-center rounded-md shadow-md md:max-w-sm transition-all duration-200' onClick={handleClick}>TryAgain</button>
  )
}
