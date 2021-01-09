import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import css from './App.module.css'
import Header from './components/Header'
import NewsFeed from './components/NewsFeed'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={css.app}>
        <div className={css['app__header-container']}>
          <Header />
        </div>
        <div className={css['app__newsFeed-container']}>
          <NewsFeed />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
