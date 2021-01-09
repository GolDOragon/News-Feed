import { Button } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions } from '../../features/news/newsReducer'
import NewsForm from '../NewsForm'
import SearchBar from '../SearchBar/SearchBar'
import css from './Header.module.css'

const Header = () => {
  const dispatch = useDispatch()

  const appWorkMode = useSelector(newsSelectors.getAppWorkMode)

  const handleChangeAppWorkMode = () => {
    dispatch(actions.clearCurrentNewsItem())
    dispatch(actions.toggleAppWorkMode('add'))
  }

  return (
    <header className={css.header}>
      <div className={css['header__searchBar-container']}>
        <SearchBar />
        <Button
          type="primary"
          onClick={handleChangeAppWorkMode}
          size="large"
          disabled={appWorkMode !== 'view'}
        >
          Post news
        </Button>
      </div>

      <div className={css['header__newsForm-container']}>
        {appWorkMode !== 'view' && <NewsForm />}
      </div>
    </header>
  )
}

export default Header
