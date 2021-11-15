import React from 'react';
import Head from 'next/head';
import NotificationContainer from '../../Components/Notifications/NotificationContainer';

const Notifications = () => {
    return(
        <div>
            <Head>
                <title>
                    Notifications | Stulink
                </title>
            </Head>
            <NotificationContainer />
        </div>
    )
}

export default Notifications;