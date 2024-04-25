import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from '../axios/axiosInstance';


const initialUser = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    userResponse: [],
    isNewUser: false,
    status: 'idel'
    // isAuthenticated: false,
}

export const alreadyUser = createAsyncThunk(
    'checkAlreadyUser',
    async initialUser => {
        try {
            const response = await Instance.post('user/already-user', initialUser)
            if (response.status === 200) {
                console.log("user already response $$$$$$$$$$", response.data);
                return response.data
            }
        } catch (error) {
            console.log(error)
        }
    }
)


export const userRegSclice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setNewUser: (state, action) => {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(alreadyUser.pending, (state, action) => {
                state.userResponse.push(action.payload)
                state.status = 'loading'
            })

            .addCase(alreadyUser.fulfilled, (state, action) => {
                state.userResponse.push(action.payload)
                state.status = 'succeeded'
            })

            .addCase(alreadyUser.rejected, (state, action) => {
                state.userResponse.push(action.payload)
                state.status = 'failed'
            })
    }
})

// signUpUser: (state, action) => {
//     state.user = action.payload;
//     state.isAuthenticated = true;
// },
// logout: (state) => {
//     state.user = null;
//     state.isAuthenticated = false;
// }


export default userRegSclice.reducer;