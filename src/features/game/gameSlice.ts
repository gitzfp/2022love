import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {BrightenModeKey, LanguageType, LoginType} from "../../utils/constants";

export interface GameState {
    darkMode: boolean;
    sideFold: boolean;
    openForSidebarMobile: boolean;
    isMobile: boolean;
    language: LanguageType;
    loginType: LoginType;
}

const initialState: GameState = {
    darkMode: !Boolean(localStorage.getItem("isBrighten")),
    sideFold: false,
    openForSidebarMobile: false,
    isMobile: false,
    language: LanguageType.EN,
    loginType: LoginType.HIDE,
};

export const gameSlice = createSlice({
    name: "setting",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            const b = !state.darkMode;
            state.darkMode = b;
            b ? localStorage.removeItem(BrightenModeKey) : localStorage.setItem(BrightenModeKey, "true");
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
            action.payload ? localStorage.removeItem(BrightenModeKey) : localStorage.setItem(BrightenModeKey, "true");
        },
        toggleSideFold: (state) => {
            state.sideFold = !state.sideFold;
        },
        setSideFold: (state, action: PayloadAction<boolean>) => {
            state.sideFold = action.payload;
        },
        setOpenForSidebarMobile: (state, action: PayloadAction<boolean>) => {
            state.openForSidebarMobile = action.payload;
        },
        setIsMobile: (state, action: PayloadAction<boolean>) => {
            state.isMobile = action.payload;
        },
        setLanguage: (state, action: PayloadAction<LanguageType>) => {
            state.language = action.payload;
        },
        setLoginType: (state, action: PayloadAction<LoginType>) => {
            state.loginType = action.payload;
        },
    },
});

export const {toggleDarkMode, setDarkMode, toggleSideFold, setSideFold, setOpenForSidebarMobile, setIsMobile, setLanguage, setLoginType} = gameSlice.actions;

export const isDarkMode = (state: RootState) => state.setting.darkMode;
export const isSideFold = (state: RootState) => state.setting.sideFold;
export const openForSidebarMobile = (state: RootState) => state.setting.openForSidebarMobile;
export const isMobile = (state: RootState) => state.setting.isMobile;
export const language = (state: RootState) => state.setting.language;
export const loginType = (state: RootState) => state.setting.loginType;

export default gameSlice.reducer;
