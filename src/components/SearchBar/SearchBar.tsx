import { SearchOutlined } from '@ant-design/icons'
import { Button, Input, Tooltip } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions, getRelevantTagsThunk } from '../../features/news/newsReducer'

const SearchBar = () => {
  const dispatch = useDispatch()

  const searchField = useSelector(newsSelectors.getSearchField)
  const relevantTags = useSelector(newsSelectors.getRelevantTags)
  const selectedTags = useSelector(newsSelectors.getSelectedTags)

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.updateSearchField(e.currentTarget.value))
    dispatch(getRelevantTagsThunk(e.currentTarget.value, selectedTags))
  }
  const handleSelectTag = (tag: string) => {
    dispatch(actions.addSelectedTag(tag))
    dispatch(actions.updateSearchField(''))
    dispatch(getRelevantTagsThunk('', [...selectedTags, tag]))
  }
  const handleUnselectTag = (tag: string) => {
    dispatch(actions.removeSelectedTag(tag))
    dispatch(
      getRelevantTagsThunk(
        searchField,
        selectedTags.filter((selTag) => selTag !== tag)
      )
    )
  }

  return (
    <div className="searchBar">
      <div className="searchBar__search">
        <div className="search__input-container">
          <Input
            className="search__input"
            onChange={handleChangeSearchInput}
            value={searchField}
          />
        </div>
        <div className="search__button-container">
          <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          </Tooltip>
        </div>
      </div>
      <div className="searchBar__tags">
        {/* <div className="tags__checkbox">Use tags</div> */}
        <div className="tags__tagStore">
          {selectedTags.map((tag) => (
            <Button
              type="dashed"
              key={tag}
              className="tagStore__btn"
              onClick={() => handleUnselectTag(tag)}
            >
              {tag} <span className="tagStore__btnX">X</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="searchBar__relevantTags">
        {relevantTags.map((tag) => (
          <button type="button" key={tag} onClick={() => handleSelectTag(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchBar
