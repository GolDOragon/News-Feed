import { Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import {
  postNewsItemThunk,
  updateNewsItemThunk
} from '../../features/news/newsReducer'

const NewsForm: React.FC = () => {
  const dispatch = useDispatch()

  const currentNewsItem = useSelector(newsSelectors.getCurrentNewsItem)
  const appWorkMode = useSelector(newsSelectors.getAppWorkMode)

  const [title, setTitle] = useState(currentNewsItem?.title)
  const [date, setDate] = useState(currentNewsItem?.date)
  const [image, setImage] = useState(currentNewsItem?.image)
  const [message, setMessage] = useState(currentNewsItem?.message)
  const [tags, setTags] = useState(currentNewsItem?.tags)

  useEffect(() => {
    setDate(currentNewsItem?.date)
    setTitle(currentNewsItem?.title)
    setImage(currentNewsItem?.image)
    setMessage(currentNewsItem?.message)
  }, [currentNewsItem])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.value)
  }

  const handlePostNews = () => {
    setDate(new Date())

    dispatch(
      postNewsItemThunk({
        title,
        date,
        image,
        message,
        id: date.toString(),
        tags,
      })
    )
  }
  const handleUpdateNews = () => {
    dispatch(
      updateNewsItemThunk({
        title,
        date,
        image,
        message,
        id: currentNewsItem.id,
        tags,
      })
    )
  }

  return (
    <div className="newsForm">
      <Input.TextArea
        // type="text"
        // className="newsForm__title"
        value={title}
        onChange={handleChangeTitle}
        placeholder="Title"
        allowClear
        autoSize={{ minRows: 1, maxRows: 2 }}
      />
      <Input.TextArea
        // type="text"
        // className="newsForm__title"
        value={message}
        onChange={handleChangeMessage}
        placeholder="Message"
        allowClear
        autoSize={{ minRows: 2, maxRows: 4 }}
      />

      {/* <input
        type="text"
        className="newsForm__message"
        value={message}
        onChange={handleChangeMessage}
        placeholder="Text"
      />
      <input
        type="text"
        className="newsForm__image"
        value={image}
        onChange={handleChangeImage}
        placeholder="Image URL"
      /> */}
      {appWorkMode === 'add' && (
        <button type="button" onClick={handlePostNews}>
          Post News
        </button>
      )}
      {appWorkMode === 'edit' && (
        <button type="button" onClick={handleUpdateNews}>
          Update News
        </button>
      )}
    </div>
  )
}

export default NewsForm
