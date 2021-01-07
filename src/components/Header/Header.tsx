import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions } from '../../features/news/newsReducer'
import NewsItemForm from '../NewsItemForm'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  const appWorkMode = useSelector(newsSelectors.getAppWorkMode)
  const dispatch = useDispatch()
  const handleChangeAppWorkMode = () => {
    dispatch(actions.toggleAppWorkMode('add'))
  }

  return (
    <header className="header">
      <div className="header__searchBar-container">
        <SearchBar />
      </div>

      <div className="header__createNewsItem-container">
        <button type="button" onClick={handleChangeAppWorkMode}>
          Create Post
        </button>
      </div>

      <div className="header__newsItemForm-container">
        {appWorkMode !== 'view' && <NewsItemForm />}
      </div>
    </header>
  )
}

export default Header
