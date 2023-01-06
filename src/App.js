import { useEffect } from 'react'
import './App.css'
import Footer from './components/Footer'
import HighlightsPanel from './components/HighlightsPanel'
import NewsletterPanel from './components/NewsletterPanel'
import NotificationPanel from './components/NotificationPanel'
import PageHeader from './components/PageHeader'

function App() {
  // useEffect(() => {
  //   console.log(window.pageYOffset)
  // }, [])

  return (
    <div className='app-container'>
      <NotificationPanel />
      <PageHeader />
      <HighlightsPanel />
      <Footer />
      <NewsletterPanel />
    </div>
  )
}

export default App
