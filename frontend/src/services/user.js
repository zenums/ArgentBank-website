import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const userSlices = createSlice({
    name: 'user',
    initialState,
    reducers: {
        incremented: (state) => {
            state.value += 1
        },
        decremented: (state) => {
            state.value -= 1
        },
    },
})

export const { incremented, decremented } = userSlices.actions

export default userSlices.reducer