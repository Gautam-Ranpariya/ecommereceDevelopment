import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from '../axios/axiosInstance';


const initialUser = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    isAlreadyUser : 'idel',
    alreadyUserStatus : 'idel',
    sendMailStatus : 'idel',
    isMail : {},
}


// check already user :)
export const alreadyUser = createAsyncThunk(
    'user/alreadyUser',
    async (initialUserData) => {
       const body = {
            email : initialUserData,
        }
        try {
            const response = await Instance.post('user/already-user',body)
            if (response.status === 200) {
                console.log("user already response $$$$$$$$$$",response.data);
                return response.data
            }
        } catch (error) {
            console.log(error.response.data.message)
        }
    }
)


// send mail thunk :)
export const sendOtpMail = createAsyncThunk(
    'user/sendOtpMail',
    async initialUserMail => {
        const body = {
            email : initialUserMail
        }
        try {
            const response = await Instance.post('otp/send',body)
            if (response.status === 200) {
                console.log("user initial mail $$$$$$",response.data);
                return response.data
            }
        } catch (error) {
            console.log("send mail error",error.response.data.message)
        }
    }
)


// ******************************** User Registration Sclice ********************************
export const userRegSclice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        setNewUserData: (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(state.user));
        }
    },
    extraReducers: (builder) => {
        builder
            // send mail builder :)
            .addCase(alreadyUser.pending, (state, action) => {
                state.alreadyUserStatus = 'pending';
                // state.isAlreadyUser = 'idel';

            })
            .addCase(alreadyUser.fulfilled, (state, action) => {
                state.alreadyUserStatus = 'fullfilled';
                state.isAlreadyUser = action.payload.alreadyUser;
                
            })
            .addCase(alreadyUser.rejected, (state, action) => {
                state.alreadyUserStatus = 'rejected';
                state.isAlreadyUser = 'idel';
            })

            // send mail builder :)
            .addCase(sendOtpMail.pending, (state, action) => {
                state.sendMailStatus = 'pending';
            })
            .addCase(sendOtpMail.fulfilled, (state, action) => {
                state.sendMailStatus = 'fullfilled';
                state.isMail = action.payload;
            })
            .addCase(sendOtpMail.rejected, (state, action) => {
                state.sendMailStatus = 'rejected';
            })
    }
})

export const {setNewUserData} = userRegSclice.actions;
export default userRegSclice.reducer;