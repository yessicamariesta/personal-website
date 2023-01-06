import React from 'react'
import { useState } from 'react'
import { useGlobalContext } from '../context'

function NotificationPanel() {
  const { setShowNotifModal, showNotifModal } = useGlobalContext()

  const closeNotif = () => {
    setShowNotifModal(false)
  }

  return (
    <div
      className={`${
        !showNotifModal
          ? 'notification-panel-container hidden'
          : 'notification-panel-container'
      }`}
    >
      <div className='notif-panel-wrapper'>
        <p>
          By accessing and using this website, you acknowledge that you have
          read and understand our <span>Cookie Policy</span>,
          <span>Privacy Policy</span>, and our <span>Terms of Service</span>.
        </p>
        <button onClick={() => closeNotif()}>Got it</button>
      </div>
    </div>
  )
}

export default NotificationPanel
