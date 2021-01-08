import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions } from '../../features/news/newsReducer'
import NewsItemForm from '../NewsItemForm'
import SearchBar from '../SearchBar/SearchBar'
import css from './Header.module.css'

const Header = () => {
  const appWorkMode = useSelector(newsSelectors.getAppWorkMode)
  const dispatch = useDispatch()
  const handleChangeAppWorkMode = () => {
    dispatch(actions.toggleAppWorkMode('add'))
  }

  return (
    <header className={css.header}>
      <div className={css['header__searchBar-container']}>
        <SearchBar />
        <Button type="primary" onClick={handleChangeAppWorkMode} size="large">
          Post news
        </Button>
      </div>

      <div className={css['header__newsItemForm-container']}>
        {appWorkMode !== 'view' && <NewsItemForm />}
      </div>
    </header>
  )
}

export default Header
