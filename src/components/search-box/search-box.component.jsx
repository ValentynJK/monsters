import './search-box.styles.css'

// !!! styling are applicable for entire webpage; there is no style isolation in simple css

const SearchBox = ({ onChangeHandler, placeholder, className }) => (
  <div>
    <input
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  </div>
)


export default SearchBox