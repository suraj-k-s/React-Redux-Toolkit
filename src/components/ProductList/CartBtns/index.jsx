import React, { useMemo } from 'react'
import Beforecart from './BeforeCart'
import AfterCart from './AfterCart'
import { useSelector } from 'react-redux'

function CartButtons({ product }) {
    const { cartItems } = useSelector((state) => state.cart)

    const cartItem = useMemo(() => {
        return cartItems?.find(item => item?.id === product?.id)
    }, [cartItems])
    return (
        <>
            {
                cartItem ? <AfterCart cartItem={cartItem} />
                    : <Beforecart product={product} />
            }
        </>
    )
}

export default CartButtons