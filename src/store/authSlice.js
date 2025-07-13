import { createSlice } from "@reduxjs/toolkit";
import { check_auth, login_service_auth } from "../services/authService";
import { asyncStatus, save_tokens_constant } from "../utils/asyncstatus";


const initialState = {
    // status
    check_auth_status: asyncStatus.IDLE,
    login_status: asyncStatus.IDLE,
    user_logout_status: asyncStatus.IDLE,
    Pmid_Article_Loading: false,

    // data
    userAuth: false,
    user: null,
    authTokens: null,
    user_profile: null,

    // error
    check_auth_error: null,
    login_error: null,
    user_logout_error: null,
    Pmid_Article_Error: null,
};

const user_auth_slice = createSlice({
    name: "userAuth",
    initialState,
    reducers: {
        setAuthState(state, { payload }) {
            state.userAuth = payload
            state.check_auth_status = asyncStatus.SUCCEEDED
        },
        setIdleStatus(state) {
            state.login_status = asyncStatus.IDLE;
        },
    },
    extraReducers: (builder) => {

        builder.addCase(login_service_auth.pending, (state, action) => {
            state.login_status = asyncStatus.LOADING;
        });

        builder.addCase(login_service_auth.fulfilled, (state, { payload }) => {
            console.log("payload", payload);

            state.authTokens = payload.data?.token;
            state.login_status = asyncStatus.SUCCEEDED;
            state.user = payload.data;
            state.userAuth = true;
            state.login_error = null;
            localStorage.setItem(
                save_tokens_constant.AUTH,
                payload.data?.token
            );
        });

        builder.addCase(login_service_auth.rejected, (state, action) => {
            state.login_status = asyncStatus.ERROR;
            state.login_error = action.error;

        });

        // check auth ========================>

        builder.addCase(check_auth.pending, (state, action) => {
            state.check_auth_status = asyncStatus.LOADING;
        });

        builder.addCase(check_auth.fulfilled, (state, { payload }) => {
            const { status, user } = payload;
            state.check_auth_status = asyncStatus.SUCCEEDED;
            if (status === "success") {
                state.user = user;
                state.userAuth = true;
            } else {
                state.userAuth = false;
            }
        });

        builder.addCase(check_auth.rejected, (state, action) => {
            state.check_auth_status = asyncStatus.ERROR;
            state.check_auth_error = action.error;
            // error_toast_message(action.error.message);

        });




    },
});

export const { setAuthState, setIdleStatus } = user_auth_slice.actions;

export default user_auth_slice.reducer;
