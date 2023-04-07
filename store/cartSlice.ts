import { createSlice } from "@reduxjs/toolkit"

const initialState: any = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            state = state.filter((item: { id: any }) => item.id !== action.payload)
        }
    }
})

export const { add, remove } = cartSlice.actions
export default cartSlice.reducer