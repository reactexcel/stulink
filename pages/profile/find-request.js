import Head from 'next/head'
import React from 'react'
import Footer from '../../Components/Common/Footer'
import Navbar from '../../Components/Common/Navbar'
import FindRequestContainer from '../../Components/FindRequest/FindRequestContainer'

const FindRequest = () => {
    return(
        <div>
            <Head>
                <title>Find Request | Stulinks</title>
            </Head>
            <Navbar />
            <FindRequestContainer />
            <Footer />
        </div>
    )
}

export default FindRequest;