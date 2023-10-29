import React from 'react'
import { useSelector } from 'react-redux'
import './Header.css'

function Header() {
  const { cartItems } = useSelector(state => state.cart)
  return (
    <header>
      <h1>Sample</h1>
      <div>
        <div className='cart-count'>
          <h6>{cartItems?.length}</h6>
        </div>
        <svg
          fill="#000000"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          id="cart"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line-color"
        >
          <path
            id="secondary-upstroke"
            d="M11,20.5h.1m5.9,0h.1"
            style={{
              fill: "none",
              stroke: "rgb(44, 169, 188)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          />
          <path
            id="primary"
            d="M3,3H5.14a1,1,0,0,1,1,.85L6.62,7,8,16l11-1,2-8H6.62"
            style={{
              fill: "none",
              stroke: "rgb(0, 0, 0)",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
            }}
          />
        </svg>
      </div>
    </header>
  )
}

export default Header