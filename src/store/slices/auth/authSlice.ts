import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthUser } from "@/types";

interface AuthState {
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    userData: AuthUser | null;
}

/**
 * 
 * TODO: utils storeage or session to be implemented as required
 * 
 */

const getSessionData = <T>(key: string): T | null => {
    const data = sessionStorage.getItem(key);
    return data ? JSON.parse(data) : null;
};

const initialState: AuthState = {
    token: getSessionData<string>("odin_auth_token"),
    refreshToken: getSessionData<string>("odin_refresh_token"),
    isAuthenticated: !!getSessionData<string>("odin_auth_token"),
    userData: getSessionData<AuthUser>("odin_userData")
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthToken: (state, action: PayloadAction<{ token: string; refreshToken: string }>) => {
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            state.isAuthenticated = true;
            sessionStorage.setItem("odin_auth_token", JSON.stringify(action.payload.token));
            sessionStorage.setItem("odin_refresh_token", JSON.stringify(action.payload.refreshToken));
        },
        clearAuthToken: state => {
            state.token = null;
            state.refreshToken = null;
            state.isAuthenticated = false;
            sessionStorage.removeItem("odin_auth_token");
            sessionStorage.removeItem("odin_refresh_token");
            sessionStorage.removeItem("odin_userData");
        },
        setUserDetails: (state, action: PayloadAction<AuthUser>) => {
            state.userData = action.payload;
            sessionStorage.setItem("odin_userData", JSON.stringify(action.payload));
        }
    }
});

export const { setAuthToken, clearAuthToken, setUserDetails } = authSlice.actions;
export default authSlice.reducer;
