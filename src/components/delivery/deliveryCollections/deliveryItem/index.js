import React from 'react'
import './deliveryItem.css'




const DeliveryItem = ({item}) => {
  return (
    <div className='delivery-item-wrapper'>
      <div className="delivery-item-cover curPoint">
        <img src={item.cover} alt={item.title} className='delivery-item-img' />
      </div>

      <div className="delivery-item-title absoluteCenter">{item.title}</div>
    </div>
  )
}

export default DeliveryItem;
