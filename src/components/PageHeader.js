import React from 'react'
import { useGlobalContext } from '../context'
import logo from '../img/y-logo-white.png'

function PageHeader() {
  const { showNotifModal } = useGlobalContext()
  return (
    <div className='page-header-container'>
      <div className={!showNotifModal ? 'page-logo hidden' : 'page-logo'}>
        <img src={logo} alt='' />
      </div>
      <div className='page-header-wrapper'>
        <div className='page-hero'>
          <p>Hello! I'm Yessica Mariesta</p>
          <p>Consult, Design, and Develop Websites</p>
          <p>Have something great in mind? Feel free to contact me.</p>
          <p>I'll help you to make it happen.</p>
          <button>Let's Make Contact</button>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
