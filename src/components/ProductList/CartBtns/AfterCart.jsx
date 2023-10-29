import React from 'react'
import './CartBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../../redux/cart'
function AfterCart({ cartItem }) {
  const dispatch = useDispatch()
  return (
    <div className='after-cart'>
      <button className='cart-counter-btn' onClick={() => dispatch(decrement(cartItem.id))} >-</button>
      <div className="cart-count">{cartItem.count}</div>
      <button className='cart-counter-btn' onClick={() => dispatch(increment(cartItem.id))} >+</button>
    </div>
  )
}

export default AfterCart