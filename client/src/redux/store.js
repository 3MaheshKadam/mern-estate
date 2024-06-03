import {configureStoree} from '@reduxjs/toolkit'
import  userReducer from './user/userSlice.js'

export const store = configureStoree({
    reducer:{user: userReducer},
    middleware : (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck : false,
    }),
})

 