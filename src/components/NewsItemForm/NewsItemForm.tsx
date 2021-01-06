import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectors } from '../../features/news'
import { postNewsItemThunk } from '../../features/news/newsReducer'

const NewsItemForm: React.FC = () => {
  const dispatch = useDispatch()
  const currentNewsItem = useSelector(selectors.getCurrentNewsItem)

  const [title, setTitle] = useState(currentNewsItem?.title)
  const [date, setDate] = useState(currentNewsItem?.date)
  const [image, setImage] = useState(currentNewsItem?.image)
  const [message, setMessage] = useState(currentNewsItem?.message)

  useEffect(() => {
    setDate(currentNewsItem?.date)
    setTitle(currentNewsItem?.title)
    setImage(currentNewsItem?.image)
    setMessage(currentNewsItem?.message)
  }, [currentNewsItem])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value)
  }
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.value)
  }
  const handleSubmit = () => {
    setDate(new Date())

    dispatch(
      postNewsItemThunk({
        title,
        date,
        image,
        message,
        id: date.toString(),
      })
    )
  }

  return (
    <div className="newsItemForm">
      <input
        type="text"
        className="newsItemForm__title"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Title"
      />
      <input
        type="text"
        className="newsItemForm__message"
        value={message}
        onChange={handleChangeMessage}
        placeholder="Text"
      />
      <input
        type="text"
        className="newsItemForm__image"
        value={image}
        onChange={handleChangeImage}
        placeholder="Image URL"
      />
      <button type="button" onClick={handleSubmit}>
        Add news
      </button>
    </div>
  )
}

export default NewsItemForm
