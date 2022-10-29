import {useCallback, useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {
    isDarkMode,
    isMobile,
    isSideFold,
    setIsMobile,
    setSideFold,
    setOpenForSidebarMobile,
    language,
    loginType,
    setLoginType,
} from "./features/setting/settingSlice";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import {setLayoutClass} from "./utils/layout";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {IntlProvider} from "react-intl";
import configLocal from "locales";
import Game from "pages/Game";
import Casino from "pages/Casino";
import {getToken, loginOut, setUserInfo} from "features/auth/authSlice";
import client from "api/client";
import Login from "pages/Login";
import {LoginType} from "utils/constants";
import apiAuth from "api/auth";
import apiCasino from "api/casinoApi";

let didInit = false;

function App() {
    const [isInitFinished, setIsInitFinished] = useState(false);
    const darkModeStatus = useAppSelector(isDarkMode);
    const sideFoldStatus = useAppSelector(isSideFold);
    const isMobileStatus = useAppSelector(isMobile);
    const currentLanguage = useAppSelector(language);
    const token = useAppSelector(getToken);
    const loginTypeStatus = useAppSelector(loginType);
    const dispatch = useAppDispatch();

    // 1200px
    // 1076px
    // 660px

    useEffect(() => {
        if (token) {
            client.setToken(token);
        }
    }, [token]);

    useEffect(() => {
        handleResize();
        const refreshToken = async () => {
            if (token) {
                client.setToken(token);
                console.log("验证 token");
                const res = await apiAuth.validationToken();
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(setUserInfo(res.data.data));
                    console.log("验证t token: success");
                    return;
                }
            }
            dispatch(loginOut());
        };
        const requestOriginalGames = async () => {
            const res = await apiCasino.getOriginalGameList();
            console.log("自研游戏列表=", res);
        };
        const initAPP = async () => {
            await refreshToken();
            await requestOriginalGames();
            setIsInitFinished(true);
        };
        if (!didInit) {
            didInit = true;
            initAPP();
        }
    }, [dispatch, token]);

    const handleResize = useCallback(() => {
        const innerWidth = window.innerWidth;
        if (innerWidth <= 660 && !isMobileStatus) {
            dispatch(setIsMobile(true));
            dispatch(setSideFold(true));
            dispatch(setOpenForSidebarMobile(false));
        }
        if (innerWidth > 660 && isMobileStatus) {
            dispatch(setIsMobile(false));
            dispatch(setSideFold(true));
            dispatch(setOpenForSidebarMobile(false));
        }
        setLayoutClass();
    }, [dispatch, isMobileStatus]);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("load", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("load", handleResize);
        };
    }, [handleResize]);

    useEffect(() => {
        document.body.classList.toggle("darken", darkModeStatus);
    }, [darkModeStatus]);

    useEffect(() => {
        document.body.classList.toggle("darken", darkModeStatus);
        const rootElement = document.getElementById("root");
        rootElement?.classList.toggle("side-fold", sideFoldStatus);
        rootElement?.classList.toggle("side-unfold", !sideFoldStatus);
    }, [sideFoldStatus, darkModeStatus, isMobileStatus]);

    if (!isInitFinished) {
        return <>Loading...</>;
    }

    return (
        <Router>
            <IntlProvider locale={currentLanguage} messages={configLocal[currentLanguage]}>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route index element={<Home />} />
                        <Route path="game/:id" element={<Game />} />
                        <Route path="gamelist/:type" element={<Casino />} />
                        <Route path="new-releases" element={<Casino type={"new-releases"} />} />
                        <Route path="tagname/:type" element={<Casino />} />
                        <Route path="casino" element={<Casino type="casino" />} />
                        <Route path="favorites" element={<Casino type="favorites" />} />
                        <Route path="recent" element={<Casino type="recent" />} />
                    </Route>
                </Routes>
                <Login
                    visible={loginTypeStatus !== LoginType.HIDE}
                    onClose={() => {
                        dispatch(setLoginType(LoginType.HIDE));
                    }}
                    isLogin={loginTypeStatus === LoginType.LOGIN}
                />
            </IntlProvider>
            <ToastContainer position={isMobileStatus ? "top-center" : "bottom-left"} autoClose={2000} hideProgressBar={true} />
        </Router>
    );
}

export default App;
