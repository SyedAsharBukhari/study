import { createAsyncThunk } from "@reduxjs/toolkit";
import { type_constant } from "../utils/asyncstatus.js";
import { apiHandle } from "../config/apiHandle/apiHandle.js";



export const login_service_auth = createAsyncThunk(
    type_constant.LOGIN,
    async (post_data) => {
        try {
            const response = await apiHandle.post(`auth/login`, post_data);
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            console.log("error", error);
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);

export const check_auth = createAsyncThunk(
    type_constant.CHECK_AUTH,
    async () => {
        try {
            const response = await apiHandle.get(`user/get/me`);
            const res_data = await response.data;
            return res_data;
        } catch (error) {
            if (error?.response?.data) {
                throw Error(error.response.data.message);
            } else {
                throw Error(error.message);
            }
        }
    }
);
