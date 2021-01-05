import React from 'react'
import NewsItemForm from '../NewsItemForm'

const Header = () => {
  return (
    <header className="header">
      <div className="header__searchBar-container">
        <input type="text" value={`SEarch BAR${1 + 2}`} />
        <button className="header__button" type="submit">
          Search
        </button>
      </div>

      <div className="header__createNewsItem-container">
        <button type="button">Create Post</button>
      </div>

      <div className="header__newsItemForm-container">
        {true && <NewsItemForm />}
      </div>
    </header>
  )
}

export default Header
