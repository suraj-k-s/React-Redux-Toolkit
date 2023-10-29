import React from 'react'
import products from '../../api/products.json'
import CartButtons from './CartBtns'
import './ProductList.css'

export default function ProductList() {
    return (
        <section className='ProductList'>
            {
                products.map((obj, key) => {
                    return (
                        <div className="main-container" key={key}>
                            <img src={obj?.image} />
                            <h3>{obj?.title}</h3>
                            <CartButtons product={obj}/>
                        </div>
                    )
                })
            }
        </section>
    )
}
