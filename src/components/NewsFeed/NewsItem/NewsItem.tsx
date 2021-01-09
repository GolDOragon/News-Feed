import { EllipsisOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, Tag } from 'antd'
import React from 'react'
import css from './NewsItem.module.css'

type PropsType = {
  title: string
  image: string
  message: string
  date: string
  tags: Array<string>
  editNewsItem: () => void
  deleteNewsItem: () => void
}

const NewsItem: React.FC<PropsType> = ({
  title,
  date,
  message,
  image,
  tags,
  editNewsItem,
  deleteNewsItem,
}: PropsType) => {
  const handleEditNewsItem = () => {
    editNewsItem()
  }

  const handleDeleteNewsItem = () => {
    deleteNewsItem()
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <Button onClick={handleEditNewsItem}>Edit</Button>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={handleDeleteNewsItem}>Delete</Button>
      </Menu.Item>
    </Menu>
  )
  return (
    <div className={css.newsItem}>
      <header className={css.newsItem__header}>
        <div className={css.header__meta}>
          <div className={css['header__date-container']}>
            <p className={css.header__date}>{date}</p>
          </div>
          <div className={css['header__tags-container']}>
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className={css['header__controls-container']}>
          <Dropdown overlay={menu} placement="bottomRight">
            <EllipsisOutlined />
          </Dropdown>
        </div>
      </header>
      <main className={css.newsItem__main}>
        <div className={css['main__title-container']}>
          <p className={css.main__title}>{title}</p>
        </div>
        <div className={css['main__message-container']}>
          <p className={css.main__message}>{message}</p>
        </div>
        <div className={css['main__image-container']}>
          {image && <img className={css.main__image} src={image} alt={title} />}
        </div>
      </main>
    </div>
  )
}

export default NewsItem
