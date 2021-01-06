import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/news'
import { actions } from '../../features/news/newsReducer'
import NewsItemForm from '../NewsItemForm'

const Header = () => {
  const isEditMode = useSelector(selectors.getIsEditMode)
  const dispatch = useDispatch()
  const handleActivateEditMode = () => {
    dispatch(actions.toggleIsEditMode(true))
  }

  return (
    <header className="header">
      <div className="header__searchBar-container">
        <input type="text" value={`SEarch BAR${1 + 2}`} />
        <button className="header__button" type="submit">
          Search
        </button>
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
