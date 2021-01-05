/* eslint-disable no-debugger */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/news'
import { getNewsThunk } from '../../features/news/newsReducer'
import NewsItem from '../NewsItem'

const NewsFeed: React.FC = () => {
  const news = useSelector(selectors.getNews)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewsThunk())
  }, [])

  return (
    <div className="newsFeed">
      {news &&
        news.map((newsItem) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <NewsItem key={newsItem.id} {...newsItem} />
        ))}
    </div>
  )
}
export default NewsFeed
