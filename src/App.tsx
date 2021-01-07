import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import css from './app.module.css'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={css.app}>
        <Header />
        <NewsFeed />
      </div>
    </BrowserRouter>
  )
}

export default App
