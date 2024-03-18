import React from 'react'
import './SearchBar.scss' // Import SCSS file for styling

interface SearchBarProps {
  query: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({ query, onChange }) => {
  return (
    <label className='search-label'>
      Search: <input className='search-input' value={query} onChange={onChange} />
    </label>
  )
}
