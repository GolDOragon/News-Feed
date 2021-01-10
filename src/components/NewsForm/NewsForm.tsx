import { Button, Form, Input, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import {
  actions,
  postNewsItemThunk,
  updateNewsItemThunk
} from '../../features/news/newsReducer'
import css from './NewsForm.module.css'

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
    setDate(currentNewsItem.date)
    setTitle(currentNewsItem.title)
    setImage(currentNewsItem.image)
    setMessage(currentNewsItem.message)
    setTags(currentNewsItem.tags)
  }, [currentNewsItem])

  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.currentTarget.value)
  }
  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value)
  }
  const handleChangeImage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImage(e.currentTarget.value)
  }
  const handleSelectTag = (value: string) => {
    setTags([...tags, value])
  }
  const handleDeselectTag = (value: string) => {
    setTags(tags.filter((t) => t !== value))
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
  const handleHideForm = () => {
    dispatch(actions.toggleAppWorkMode('view'))
    dispatch(actions.clearCurrentNewsItem())
  }

  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 16,
    },
  }

  return (
    <div className={css.newsForm}>
      <Form {...layout}>
        <Form.Item
          label="Title"
          rules={[
            {
              required: true,
              message: 'Please input title!',
            },
          ]}
        >
          <Input.TextArea
            value={title}
            onChange={handleChangeTitle}
            autoFocus
            allowClear
            autoSize={{ minRows: 1, maxRows: 2 }}
          />
        </Form.Item>
        <Form.Item
          label="Message"
          rules={[
            {
              required: true,
              message: 'Please input news!',
            },
          ]}
        >
          <Input.TextArea
            value={message}
            onChange={handleChangeMessage}
            allowClear
            autoSize={{ minRows: 3, maxRows: 6 }}
          />
        </Form.Item>
        <Form.Item label="Image URL">
          <Input.TextArea
            size="large"
            value={image}
            onChange={handleChangeImage}
            allowClear
            autoSize={{ maxRows: 2 }}
          />
        </Form.Item>
        <Form.Item label="Tags">
          <Select
            mode="tags"
            defaultValue={tags}
            open={false}
            onSelect={handleSelectTag}
            onDeselect={handleDeselectTag}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <span className={css['newsForm__submitBtn-container']}>
            {appWorkMode === 'add' && (
              <Button type="primary" onClick={handlePostNews}>
                Post News
              </Button>
            )}
            {appWorkMode === 'edit' && (
              <Button type="primary" onClick={handleUpdateNews}>
                Update News
              </Button>
            )}
          </span>
          <Button type="default" danger onClick={handleHideForm}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default NewsForm
