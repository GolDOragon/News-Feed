import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNewsItemThunk } from '../../features/news/newsReducer'

type PropsType = {
  id: string
  title: string
  image: string
  message: string
  date: Date
}

// eslint-disable-next-line react/prop-types
const NewsItem: React.FC<PropsType> = ({ title, date, message, image, id }) => {
  const dispatch = useDispatch()
  const [editMode, setEditMode] = useState(false)
  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const deleteNewsItem = () => {
    dispatch(deleteNewsItemThunk(id))
  }

  return (
    <div className="newsItem">
      <header className="newsItem__header">
        <div className="header__title-container">
          <p className="header__title">{title}</p>
        </div>
        <div className="header__date-container">
          <p className="header__date">{date.toLocaleString()}</p>
        </div>
        <div className="header__controls-container">
          <button
            className="header__controls"
            type="button"
            onClick={toggleEditMode}
          >
            ***
          </button>
          {editMode && (
            <div className="header__button">
              <button type="button">Edit</button>
              <button type="button" onClick={deleteNewsItem}>
                Delete
              </button>
            </div>
          )}
        </div>
      </header>
      <main className="newsItem__main">
        <div className="main__message-container">
          <p className="main__message">{message}</p>
        </div>
        <div className="main__image-container">
          <img className="main__image" src={image} alt={title} />
        </div>
      </main>
      <footer className="newsItem__footer">
        <div className="footer__likes">0</div>
      </footer>
    </div>
  )
}

export default NewsItem
