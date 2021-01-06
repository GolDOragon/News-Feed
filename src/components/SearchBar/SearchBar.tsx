import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newsSelectors } from '../../features/news'
import { actions, getRelevantTagsThunk } from '../../features/news/newsReducer'

const SearchBar = () => {
  const dispatch = useDispatch()

  const searchField = useSelector(newsSelectors.getSearchField)
  const relevantTags = useSelector(newsSelectors.getRelevantTags)

  const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.updateSearchField(e.currentTarget.value))
    dispatch(getRelevantTagsThunk(e.currentTarget.value))
  }

  return (
    <div className="searchBar">
      <div className="searchBar__search">
        <div className="search__input-container">
          <input
            type="text"
            className="search__input"
            onChange={handleChangeSearchInput}
            value={searchField}
          />
        </div>
        <div className="search__button-container">
          <button className="search__button" type="button">
            O
          </button>
        </div>
      </div>
      <div className="searchBar__tags">
        <div className="tags__checkbox">Use tags</div>
        <div className="tags__tagStore">
          <p>tag1</p>
          <p>tag1</p>
          <p>tag1</p>
        </div>
      </div>
      <div className="searchBar__relevantTags">
        ========
        {relevantTags.map((tag) => (
          <p>{tag}</p>
        ))}
        =====
      </div>
    </div>
  )
}

export default SearchBar
