import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    getRatingGather,
    getCategoryId,
    searchInputValue,
    clearFiltering,
    categorySelect,
    ratingSelect,
  } = props

  const clearFilters = () => {
    clearFiltering()
  }
  const getRatingId = id => {
    getRatingGather(id)
  }

  const clickCategory = id => {
    getCategoryId(id)
  }

  const onChangeSearch = event => {
    if (event.key === 'Enter') {
      searchInputValue(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      {/* Replace this element with your code */}
      <div className="search-container">
        <input
          type="search"
          className="input-element"
          onKeyDown={onChangeSearch}
        />
        <BsSearch />
      </div>
      <ul>
        <li>
          <h1 className="heading">Category</h1>
        </li>
        <>
          {categoryOptions.map(eachItem => {
            const onClickCategory = () => {
              const {categoryId} = eachItem
              clickCategory(categoryId)
            }
            const check = categorySelect === eachItem.categoryId
            console.log(check)
            return (
              <li
                key={eachItem.categoryId}
                onClick={onClickCategory}
                className={`${check ? 'active-button' : null}`}
              >
                <p className={`button ${check ? 'active-button' : null}`}>
                  {eachItem.name}
                </p>
              </li>
            )
          })}
        </>
      </ul>
      <ul>
        <li>
          <h1 className="heading">Rating</h1>
        </li>
        {ratingsList.map(eachItem => {
          const {ratingId} = eachItem
          const onClickRating = () => {
            getRatingId(ratingId)
          }
          const check = ratingSelect === eachItem.ratingId
          return (
            <li
              className="list-category"
              key={eachItem.ratingId}
              onClick={onClickRating}
              value={eachItem.ratingId}
            >
              <img
                src={eachItem.imageUrl}
                className="image"
                alt={`rating ${eachItem.ratingId}`}
                value={eachItem.ratingId}
              />
              <p className={`button ${check ? 'active-button' : null}`}>&up</p>
            </li>
          )
        })}
      </ul>
      <div>
        <button type="button" className="clear-button" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}

export default FiltersGroup
