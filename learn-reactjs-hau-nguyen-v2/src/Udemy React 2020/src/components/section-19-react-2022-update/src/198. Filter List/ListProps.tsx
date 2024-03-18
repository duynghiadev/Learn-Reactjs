import { FoodItem } from '@/198. Filter List/data'
import React from 'react'
import './List.scss' // Import SCSS file for styling

interface ListProps {
  items: FoodItem[]
}

export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <table className='food-list'>
      <tbody>
        {items.map((food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
