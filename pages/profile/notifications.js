import React from 'react';
import Head from 'next/head';
import NotificationContainer from '../../Components/Notifications/NotificationContainer';
import Navbar from '../../Components/Common/Navbar';
import Footer from '../../Components/Common/Footer';

const Notifications = () => {
    return(
        <div>
            <Head>
                <title>
                    Notifications | Stulink
                </title>
            </Head>
            <Navbar />
            <NotificationContainer />
            <Footer />
        </div>
    )
}

export default Notifications;