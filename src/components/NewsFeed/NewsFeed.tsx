import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/news'
import { actions, getNewsThunk } from '../../features/news/newsReducer'
import NewsItem from '../NewsItem'

const NewsFeed: React.FC = () => {
  const dispatch = useDispatch()

  const news = useSelector(selectors.getNews)
  const requestProgress = useSelector(selectors.getRequestProgress)

  useEffect(() => {
    dispatch(getNewsThunk())
  }, [])

  return (
    <div className="newsFeed">
      {news &&
        news.map((newsItem) => (
          <NewsItem
            key={newsItem.id}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...newsItem}
            isDisabled={requestProgress.some((id) => id === newsItem.id)}
            sendNewsItemToState={() =>
              dispatch(actions.sendNewsItemToState(newsItem))
            }
          />
        ))}
    </div>
  )
}
export default NewsFeed
