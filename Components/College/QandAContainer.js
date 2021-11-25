import React from 'react'
import { qaGroupicon } from '../Common/Images'

//*Q and A form
const QandAForm = () => {
  return (
    <div className='shadow-lgOuter11 rounded-xl10'>
      <article className=' px-9  py-9'>
        <header className='flex items-center mb-9'>
          <img src={qaGroupicon} alt='qaGroup icon' width={33} height={33} />
          <h2 className='font-semibold text-2xl text-blue-550 capitalize ml-3'>
            help desk q &#38; a
          </h2>
        </header>

        <section className='grid grid-cols-1 px-11'>
          <header className='flex justify-between items-center mb-3'>
            <h2 className='text-lg text-green-550 font-medium capitalize'>
              your question
            </h2>
            <p className='text-sm text-gray-270'>Character 0/160</p>
          </header>

          <form>
            <div className='mb-5'>
              <input
                name='question'
                type='text'
                className='max-h-14 w-full resize-none border-2 rounded-md py-4 px-4 focus:outline-none'
                placeholder='Type your Question'
              />
            </div>
            <div>
              <select
                name='question'
                className='max-h-14 w-full resize-none bg-white  border-2  rounded-md py-4 px-4 focus:outline-none text-gray-400'
                placeholder='Type your Question'
              >
                <option value='one' disabled selected className='text-gray-400'>
                  Select Category
                </option>
                <option value='two'>two</option>
              </select>
            </div>
          </form>
        </section>
      </article>
    </div>
  )
}

//* main Container
const QandAContainer = () => {
  return (
    <div className='p-8'>
      <QandAForm />
    </div>
  )
}

export default QandAContainer
