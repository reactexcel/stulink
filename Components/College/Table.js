import React from 'react'

const Table = () => {
  return (
    <div>
      <table class='max-w-3xl w-full mx-auto table-auto text-center'>
        <thead>
          <tr className='border-b-2 text-green-400'>
            <th colSpan='2 py-2 '></th>
            <th colSpan='2 py-2 flex  '>Stulink</th>
            <th colSpan='2 py-2 '>NIRF</th>
          </tr>
        </thead>
        <tbody>
          {/* heading */}
          <tr className='border-b-2 text-blue-400 mt-3 mb-6'>
            <td colSpan='2'></td>
            <td className='py-3 pb-6'>Ranking</td>
            <td className='mx-2 py-3 pb-6'>Rating</td>
            <td>Ranking</td>
            <td className=' py-3 pb-6'>Rating</td>
          </tr>
          <tr></tr>
          {/* heading */}
          {/* body */}
          {[1, 2, 3].map((item, index) => {
            return (
              <tr className='border-b-2' key={index}>
                <td className='text-green-400 pt-4 pb-5'>University</td>
                <td className='pt-4 pb-5'></td>
                <td className='pt-4 pb-5'>
                  3<sup>rd</sup>
                </td>
                <td className='pt-4 pb-5'>2</td>
                <td className='pt-4 pb-5'>
                  5<sup>th</sup>
                </td>
                <td className='pt-4 pb-5'>3</td>
              </tr>
            )
          })}

          {/* end */}
        </tbody>
      </table>
    </div>
  )
}

export default Table
