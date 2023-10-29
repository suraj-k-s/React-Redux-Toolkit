import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/')
    let res = await data.json()
    return res
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: [],
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            console.log("Loading Start")
        },
        [fetchUsers.fulfilled]: (state, action) => {
            console.log("Loading End", "== Success")
            state.userDetails = action.payload
        },
        [fetchUsers.rejected]: (state, action) => {
            console.log("Loading End", "== Error")
        }
    }
})

/*

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: [],
    },
    reducers: {
        getUsers: (state, action) => {
            state.userDetails = action.payload
        },
    }
})
*/

export default userSlice.reducer
