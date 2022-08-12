import { ChangeEvent } from 'react';
import './search-box.styles.css'

type SearchBoxProps = {
  className: string,
  placeholder?: string, // "?" or string | null - for optional type
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <div>
    <input
      type='search'
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  </div>
)

export default SearchBox