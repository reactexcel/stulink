import React from 'react'
import QandAReply from './QandAReply'
import QandAForm from './QandForm'
//*Q and A form

//* main Container
const QandAContainer = () => {
  return (
    <main>
      <QandAForm />
      <QandAReply />
    </main>
  )
}

export default QandAContainer
