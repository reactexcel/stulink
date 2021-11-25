import React from 'react'
import { cross } from '../Common/Images'
const RemoveButton = ({ children, ...item }) => {
  return (
    <button
      className='bg-black pl-12 font-medium text-sm py-3 text-white mt-6 rounded-xl20 flex justify-center items-center capitalize mx-5'
      {...item}
    >
      {children}
      <img src={cross} alt='cross icon' className='pl-7 pr-4' />
    </button>
  )
}

export default RemoveButton
