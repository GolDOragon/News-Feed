import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import {
  actions,
  deleteNewsItemThunk,
  requestNewsThunk
} from '../../features/news/newsReducer'
import NewsItem from './NewsItem'

const NewsFeed: React.FC = () => {
  const dispatch = useDispatch()

  const news = useSelector(newsSelectors.getNews)

  useEffect(() => {
    dispatch(requestNewsThunk())
  }, [])

  const handleEditNewsItem = (id: string) => {
    dispatch(actions.toggleAppWorkMode('edit'))
    dispatch(actions.addNewsItemToState(id))
  }
  const handleDeleteNewsItem = (id: string) => {
    dispatch(deleteNewsItemThunk(id))
  }

  return (
    <div className="newsFeed">
      {news.map((newsItem) => (
        <NewsItem
          key={newsItem.id}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...newsItem}
          editNewsItem={() => handleEditNewsItem(newsItem.id)}
          deleteNewsItem={() => handleDeleteNewsItem(newsItem.id)}
        />
      ))}
    </div>
  )
}
export default NewsFeed
