import React from 'react'
import { search, locationWhite, schoolWhite } from '../Common/Images'
function SearchMember() {
  return (
    //* parent container
    <section className='w-full  shadow-lgOuter rounded-xl10 flex justify-between items-center py-4 px-9'>
      {/* search and location Container */}
      <div className='flex justify-between items-center '>
        {/* input */}
        <div className='flex justify-center rounded-xl30 items-center py-3  border-2 border-gray-250 px-6'>
          <label htmlFor='search' className='pr-3'>
            <img src={search} alt='search icon' />
          </label>
          <input
            id='search'
            type='search'
            className='outline-none max-h-5 max-w-131px'
            placeholder='Search for friends'
          />
        </div>
        {/* end */}
        <button className='mx-5 px-10 py-3  flex justify-center items-center border-2 border-gray-250 rounded-xl30'>
          <img src={locationWhite} alt='location pin' className='pr-2 ' />
          <span className='text-gray-250 capitalize font-medium'>location</span>
        </button>
        <button className='px-10 py-3  flex justify-center items-center border-2 border-gray-250 rounded-xl30'>
          <img src={schoolWhite} alt='college icon' className='pr-2 ' />
          <span className='text-gray-250 capitalize font-medium'>college</span>
        </button>
      </div>
      {/* search and location end */}
      {/* sort */}
      <div className='bg-blue-550 text-white py-3 px-12 rounded-xl30'>
        <select name='sort' id='sort' className='bg-blue-550 outline-none'>
          <option value='sort'>sort</option>
        </select>
      </div>

      {/* end */}
    </section>
  )
}

export default SearchMember
