import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import BestColleges from './BestColleges'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import NewsTabs from './NewsTabs'
import AllNews from './AllNews'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsRequest } from '../../Redux/action'
import { newsIcon } from '../Common/Images'
const NewsPageContainer = () => {
  const [tab, setTab] = useState('All')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsRequest())
  }, [tab])

  const data = useSelector((state) => state.news)
  return (
    <>
      <Head>
        <title>Stulinks | News</title>
      </Head>
      <Navbar />
      <div className='grid grid-cols-7  gap-5 my-16 mx-12'>
        <div className='col-span-5 '>
          <NewsTabs tab={tab} setTab={setTab} />
          <div className='my-12 rounded-xl  border shadow-xl  '>
            <div className='mx-8 max-w-11/12 pb-8'>
              <div className='flex items-center justify-start ml-2'>
                <img src={newsIcon} alt='newspaper icon' className='w-8 h-8 ' />

                <h1 className='text-blue-550 text-2xl font-semibold my-4 pl-2'>
                  {tab} News
                </h1>
              </div>

              {tab === 'All'
                ? data?.newsData?.data?.map((item) => (
                    <AllNews key={item._id} news={item} />
                  ))
                : data?.newsData?.data
                    ?.filter((val) => val.category === tab)
                    .map((item) => <AllNews key={item._id} news={item} />)}
            </div>
          </div>
        </div>
        <div className='col-span-2'>
          <BestColleges />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default NewsPageContainer
