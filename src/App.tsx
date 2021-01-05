import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <NewsFeed />
    </BrowserRouter>
  )
}

export default App
