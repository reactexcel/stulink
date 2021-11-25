import React from 'react'
import { profileImg, members } from '../Common/Images'
import RemoveButton from './RemoveButton'
import SearchMember from './SearchMember'
import Member from './Member'

const memberData = [{}]

const MembersContainer = () => {
  return (
    <div>
      {/* header and search */}
      <div className='mx-12 px-10 pt-10 mt-16 justify-start items-center'>
        <header className='flex items-center justify-start pb-7'>
          <img src={members} alt='members icon' width={37} height={37} />
          <p className='text-black text-2xl font-semibold pl-3'>Members</p>
        </header>
        <SearchMember />
        <div className='flex'>
          <RemoveButton>sand</RemoveButton>
          <RemoveButton>delhi</RemoveButton>
        </div>
      </div>

      <div className='mx-12 px-8 pb-8'>
        <div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mb-12 gap-y-8 gap-x-5 mt-6'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((member, index) => {
            return (
              <div key={index}>
                <Member />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MembersContainer
