import { Select } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import {
  getRelevantTagsThunk,
  selectTagThunk,
  unselectTagThunk
} from '../../features/news/newsReducer'

const SearchBar = () => {
  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const relevantTags = useSelector(newsSelectors.getRelevantTags)
  const selectedTags = useSelector(newsSelectors.getSelectedTags)

  const handleChangeSearchValue = (value: string) => {
    setSearchValue(value)
    dispatch(getRelevantTagsThunk(value, selectedTags))
  }
  const handleSelectTag = (tag: string) => {
    setSearchValue('')
    dispatch(selectTagThunk(tag, searchValue, selectedTags))
  }
  const handleUnselectTag = (tag: string) => {
    dispatch(unselectTagThunk(tag, searchValue, selectedTags))
  }

  return (
    <div className="searchBar">
      <Select
        mode="multiple"
        options={relevantTags}
        searchValue={searchValue}
        open={!!searchValue}
        placeholder="Select tags..."
        onSearch={handleChangeSearchValue}
        onSelect={handleSelectTag}
        onDeselect={handleUnselectTag}
        getPopupContainer={(trigger) => trigger.parentNode}
        style={{ width: '100%' }}
        size="large"
      />
    </div>
  )
}

export default SearchBar
