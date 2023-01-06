import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showNotifModal, setShowNotifModal] = useState(true)
  const [showNewsPanel, setShowNewsPanel] = useState(true)

  useEffect(() => {
    window.onscroll = function () {
      const body = document.body,
        html = document.documentElement
      const docHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      const thirdsWinHeight = (docHeight - window.innerHeight) / 3
      const currentScrollPos = window.pageYOffset
      if (currentScrollPos >= thirdsWinHeight) {
        document.querySelector('.news-letter-container').classList.add('shown')
      }
    }
  }, [])

  useEffect(() => {
    if (showNewsPanel === false) {
      document.querySelector('.news-letter-container').classList.add('close')

      setTimeout(() => {
        document
          .querySelector('.news-letter-container')
          .classList.remove('close')
        setShowNewsPanel(true)
      }, 600000)
    }
  }, [showNewsPanel])

  return (
    <AppContext.Provider
      value={{
        showNotifModal,
        setShowNotifModal,
        setShowNewsPanel,
        showNewsPanel,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider }
