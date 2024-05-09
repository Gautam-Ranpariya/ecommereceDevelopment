import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './userRegistrationSclice';


const store  = configureStore({
    reducer: {
        userRegistration : registrationReducer,
    }
})

export default store;


// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import registrationReducer from './userRegistrationSclice';
// import storage from "redux-persist/lib/storage/session";

// const reducers = combineReducers({
//     userRegistration : registrationReducer,
// });
// const persistConfig = {
//     key: "root",
//     storage,
//     whitelist: ["auth", "commonStates"],
// };
// const persistedReducer = persistReducer(persistConfig, reducers);
// // const isProd = window?.location?.href?.includes("app.vtalkz.com");
// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
//     // devTools: isProd ? false : true,
// });
// export const persistor = persistStore(store);
// export default store;