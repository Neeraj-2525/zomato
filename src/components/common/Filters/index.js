import React from 'react'
import './filters.css'
import FilterItem from './FilterItem'

const Filters = ({filterList}) => {
  return (
    <div className='filters sticky-top'>
      {filterList && filterList.map((filter)=>{
        return (
        <FilterItem filter={filter} key={filter.id}/>
        )
      })}
    </div>
  )
}

export default Filters
