import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useGlobalContext } from '../context'

function NewsletterPanel() {
  const { setShowNewsPanel, showNewsPanel } = useGlobalContext()

  const closeNotifModal = () => {
    setShowNewsPanel(false)
  }

  return (
    <div className='news-letter-container'>
      <div className='news-letter-header'>
        <AiOutlineClose onClick={() => closeNotifModal()} />
      </div>

      <div className='news-letter-body'>
        <p>Get latest updates in web technologies</p>
        <p>
          I write articles related to web technologies, such as design trends,
          development tools, UI/UX case studies and reviews, and more. Sign up
          to my newsletter to get them all.
        </p>

        <form action=''>
          <input type='text' placeholder='Email address' />
          <button>Count me in!</button>
        </form>
      </div>
    </div>
  )
}

export default NewsletterPanel
