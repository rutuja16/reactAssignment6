import {configureStore} from '@reduxjs/toolkit'
import actionSlice from './actionSlice'


export default configureStore({
    reducer:{
        student:actionSlice
    }
})