import { List } from '@/198. Filter List/ListProps'
import { SearchBar } from '@/198. Filter List/SearchBar'
import React, { useState } from 'react'
import './FilterableList.scss'
import { FoodItem, filterItems, foods } from './data'

interface FilterableListProps {}

const FilterableList: React.FC<FilterableListProps> = () => {
  const [query, setQuery] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const filteredFoods: FoodItem[] = filterItems(foods, query)

  return (
    <div className='filterable-list'>
      <SearchBar query={query} onChange={handleChange} />
      <br />
      <br />
      <List items={filteredFoods} />
    </div>
  )
}

export default FilterableList
