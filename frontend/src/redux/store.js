import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './userRegistrationSclice';


const store  = configureStore({
    reducer: {
        userRegistration : registrationReducer,
    }
})

export default store;