import React from 'react'
import './CartBtns.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/cart'

function BeforeCart({ product }) {
  const dispatch = useDispatch()

  return (
    <div className='before-cart'>
      <button className='add-cart-btn'
        onClick={() => dispatch(addToCart(product))}
      >Add To Cart</button>
    </div>
  )
}

export default BeforeCart