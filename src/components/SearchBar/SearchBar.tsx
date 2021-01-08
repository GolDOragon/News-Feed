import { Select } from 'antd'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import {
  actions,
  getRelevantTagsThunk,
  selectTagThunk,
  unselectTagThunk
} from '../../features/news/newsReducer'

const SearchBar = () => {
  const dispatch = useDispatch()

  const searchField = useSelector(newsSelectors.getSearchField)
  const relevantTags = useSelector(newsSelectors.getRelevantTags)
  const selectedTags = useSelector(newsSelectors.getSelectedTags)

  const handleChangeSearchInput = (value: string) => {
    dispatch(actions.updateSearchField(value))
    dispatch(getRelevantTagsThunk(value, selectedTags))
  }
  const handleSelectTag = (tag: string) => {
    dispatch(selectTagThunk(tag, selectedTags))
  }
  const handleUnselectTag = (tag: string) => {
    dispatch(unselectTagThunk(tag, searchField, selectedTags))
  }

  return (
    <div className="searchBar">
      <Select
        mode="multiple"
        options={relevantTags}
        searchValue={searchField}
        placeholder="Select tags..."
        onSearch={handleChangeSearchInput}
        onSelect={handleSelectTag}
        onDeselect={handleUnselectTag}
        style={{ width: '100%' }}
        size="large"
      />
    </div>
  )
}

export default SearchBar
