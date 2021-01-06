import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions } from '../../features/news/newsReducer'
import NewsItemForm from '../NewsItemForm'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  const isEditMode = useSelector(newsSelectors.getIsEditMode)
  const dispatch = useDispatch()
  const handleActivateEditMode = () => {
    dispatch(actions.toggleIsEditMode(true))
  }

  return (
    <header className="header">
      <div className="header__searchBar-container">
        <SearchBar />
      </div>

      <div className="header__createNewsItem-container">
        <button type="button" onClick={handleActivateEditMode}>
          Create Post
        </button>
      </div>

      <div className="header__newsItemForm-container">
        {isEditMode && <NewsItemForm />}
      </div>
    </header>
  )
}

export default Header
