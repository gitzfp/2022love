import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import client from "api/client";
import {MoneyType} from "utils/constants";
import {UserInfo} from "utils/models";
import {RootState} from "../../app/store";

export interface authState {
    token?: string;
    isLogin: boolean;
    userMoneyType: MoneyType;
    nick?: string;
    avatar?: string;
}

const initialState: authState = {
    token: localStorage.getItem("token") || undefined,
    nick: localStorage.getItem("nick") || undefined,
    avatar: localStorage.getItem("avatar") || undefined,
    isLogin: Boolean(localStorage.getItem("token")),
    userMoneyType: MoneyType.USDT,
};

export const counterSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfo>) => {
            state.isLogin = true;
            state.token = action.payload.token;
            state.nick = action.payload.nick;
            state.avatar = action.payload.header;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("nick", action.payload.nick);
            localStorage.setItem("avatar", action.payload.header);
            client.setToken(action.payload.token);
        },

        loginOut: (state, action: PayloadAction) => {
            state.isLogin = false;
            state.token = undefined;
            localStorage.clear();
        },
    },
});

export const {setUserInfo, loginOut} = counterSlice.actions;

export const getToken = (state: RootState) => state.auth.token;
export const isLogin = (state: RootState) => state.auth.isLogin;
export const getUserMoneyType = (state: RootState) => state.auth.userMoneyType;
export const getUserNick = (state: RootState) => state.auth.nick;
export const getUserAvatar = (state: RootState) => state.auth.avatar;

export default counterSlice.reducer;
