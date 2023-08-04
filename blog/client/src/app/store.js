import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../Reducer/counterSlice'
import userSlice from '../Reducer/userSlice'

export default configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false,
    //     })
})