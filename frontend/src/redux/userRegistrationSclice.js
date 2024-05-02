import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Instance from '../axios/axiosInstance';
import { authHeader } from "../shared/common/headerAxios/headerAxios";


const auth = {
    // userData states :)
    user: {
        email: "",
        password: "",
        conformPassword: "",
    },

    // api calling states :)
    loading : 'init',
}


// check already user :)
export const alreadyUser = createAsyncThunk(
    'auth/alreadyUser',
    async (initialUserData) => {
        const body = {
            email: initialUserData,
        }
        try {
            const response = await Instance.post('user/already-user', body)
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            return error;
        }
    }
)


// send mail thunk :)
export const sendOtpMail = createAsyncThunk(
    'auth/sendOtpMail',
    async initialUserMail => {
        const body = {
            email: initialUserMail
        }
        try {
            const response = await Instance.post('otp/send', body, { headers: authHeader() })
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            return error;
        }
    }
)


// verify otp thunk :)
export const verifyOtp = createAsyncThunk(
    'auth/verifyOtp',
    async initialUserMailOtp => {
        const body = {
            email: initialUserMailOtp.email,
            otp : initialUserMailOtp.otp,
        }
        try {
            const response = await Instance.post('otp/verify', body, { headers : authHeader() })
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            return error;
        }
    } 
)


// ******************************** User Registration Sclice ********************************
export const userRegSclice = createSlice({
    name: 'auth',
    initialState: auth,
    reducers: {
        // set new user data :)
        setNewUserData: (state, action) => {
            const { name, value } = action.payload;
            state.user[name] = value;
        },

        // reset user data :)
        resetUserData(state) {
            state.user = auth.user;
          },
    },
    extraReducers: (builder) => {
        builder
            // check already user or not :)
            .addCase(alreadyUser.pending, (state, action) => {
                state.loading = "pending";
            })
            .addCase(alreadyUser.fulfilled, (state, action) => {
                state.loading = "success";
            })
            .addCase(alreadyUser.rejected, (state, action) => {
                state.loading = "failed";
            })


            // check Mail send or not :)
            .addCase(sendOtpMail.pending, (state, action) => {
                state.loading = "pending";
            })
            .addCase(sendOtpMail.fulfilled, (state, action) => {
                state.loading = "success";
            })
            .addCase(sendOtpMail.rejected, (state, action) => {
                state.loading = "failed";
            })


            // verify otp & mail :)
            .addCase(verifyOtp.pending, (state, action) => {
                state.loading = "pending";
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.loading = "success";
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.loading = "failed";
            });
    }
})

export const { setNewUserData , resetUserData } = userRegSclice.actions;
export default userRegSclice.reducer;