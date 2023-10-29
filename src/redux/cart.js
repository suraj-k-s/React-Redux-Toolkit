import { createSlice } from "@reduxjs/toolkit";

let INITIAL_STATE = {
    cartItems: []
}

let cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push({
                ...action.payload,
                count: 1
            })
        },
        increment: (state, action) => {
            const proId = action.payload

            state.cartItems.forEach((item, key) => {
                if (item.id === proId) {
                    item.count++
                    return true
                }
            })
        },
        decrement: (state, action) => {
            const proId = action.payload

            state.cartItems.forEach((item, key) => {
                if (item.id === proId) {
                    if (item.count - 1 <= 0) {
                        state.cartItems.splice(key, 1)
                        return true
                    } else {
                        item.count--
                        return true
                    }
                }
            })
        },
    }
})

export const { increment, decrement, addToCart } = cartSlice.actions

export default cartSlice.reducer