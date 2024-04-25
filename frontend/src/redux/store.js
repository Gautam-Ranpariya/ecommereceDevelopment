import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './userRegistrationSclice'


const store  = configureStore({
    reducer: {
        userRegistarion : registrationReducer,
    }
})

export default store;