import React, {ReactElement, useEffect, useLayoutEffect, useState} from "react";
import ReactDOM from "react-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {isDarkMode, isMobile} from "../features/setting/settingSlice";
import {setUserInfo} from "features/auth/authSlice";
import SvgIcon from "../components/SvgIcon";
import {useForm} from "react-hook-form";
import google from "../themes/202210/assets/login/google.791b974c.png";
import facebook from "../themes/202210/assets/login/facebook.6a301cc4.png";
import metamask from "../themes/202210/assets/login/metamask.cdab31e0.png";
import telegram from "../themes/202210/assets/login/telegram.1d8e94a7.png";
import walletconnect from "../themes/202210/assets/login/walletconnect.41d5d189.png";
import apiAuth from "api/auth";
import {useIntl} from "react-intl";
import {toast} from "react-toastify";

interface Props {
    children?: React.ReactNode;
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: () => void;
    closeOnClickMask?: boolean;
    isLogin: boolean;
}

const Dialog: React.FunctionComponent<Props> = (props: Props) => {
    const initialStyle = {
        transitionProperty: "opacity",
        transitionDuration: "1s",
        transform: "scale(0,0)",
        opacity: 0,
        width: "43.75rem",
        height: "30.625rem",
        marginTop: "-15.3125rem",
        marginLeft: "-21.875rem",
    };
    const initialMobilStyle = {transitionProperty: "margin-left", transitionTimingFunction: "easy-in", transitionDuration: "4s", marginLeft: 400};
    const onClickMask = () => {
        props.onClose();
        setDialogStyle(initialStyle);
        setMobileStyle(initialMobilStyle);
    };

    const intl = useIntl();
    const md5 = require("md5");
    const isMobileStatus = useAppSelector(isMobile);
    const [dialogStyle, setDialogStyle] = useState(initialStyle);
    const [mobileStyle, setMobileStyle] = useState(initialMobilStyle);
    const {register, handleSubmit, reset, setFocus} = useForm();

    const [isLogin, setLogin] = useState(props.isLogin);
    const [agree, checkAgree] = useState(false);
    const [showRegist, setShowRegist] = useState(false);
    const darkModeStatus = useAppSelector(isDarkMode);
    const [foucsIndex, setFocusIndex] = useState(1);
    const [forgetPass, setForgetPass] = useState(false);
    const [readOnly, setReadOnly] = useState(true);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLogin(props.isLogin);
    }, [props.isLogin]);

    useLayoutEffect(() => {
        if (props.visible) {
            setTimeout(() => {
                const newStyle = {...dialogStyle};
                newStyle.transform = "scale(1,1)";
                newStyle.opacity = 1;
                setDialogStyle(newStyle);
                setMobileStyle({transitionProperty: "margin-left", transitionTimingFunction: "easy-in", transitionDuration: "0.5s", marginLeft: 0});
            }, 0);

            setTimeout(() => {
                setReadOnly(false);
                setFocus("Email");
            }, 400);
        } else {
            setReadOnly(true);
        }
        reset({
            Email: "",
            password: "",
            inviteCode: "",
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.visible]);

    const renderOtherWrapView = () => {
        return (
            <div className="other-sign-wrap">
                <div className="line-text">
                    <div className="l"></div>
                    <div className="t">Or log in directly with </div>
                    <div className="l"></div>
                </div>
                <div className="other-group">
                    <button id="gg_login" type="button" title="google">
                        <img alt="google-login" src={google} />
                    </button>
                    <button id="fb_login" type="button" title="facebook">
                        <img alt="facebook-login" src={facebook} />
                    </button>
                    <button id="tg_login" type="button" title="telegram">
                        <img alt="telegram-login" src={telegram} />
                        <script
                            async={false}
                            src="https://telegram.org/js/telegram-widget.js?5"
                            data-telegram-login="BC_GAME_Bot"
                            data-size="large"
                            data-onauth="onTelegramAuth(user)"
                            data-request-access="write"></script>
                    </button>
                    <button type="button">
                        <img alt="metamask-login" src={metamask} />
                    </button>
                    <button type="button">
                        <img alt="walletconnect-login" src={walletconnect} />
                    </button>
                </div>
            </div>
        );
    };

    const renderInputView = (title: string, placeholder: string) => {
        return (
            <div className="ui-input">
                <div className="input-label">{title}</div>
                <div className={`input-control ${foucsIndex === 3 ? "is-focus" : ""}`}>
                    <input
                        {...register("inviteCode")}
                        readOnly={readOnly}
                        type="text"
                        tabIndex={3}
                        autoComplete="off"
                        placeholder={`${placeholder}`}
                        required={false}
                        onFocus={() => setFocusIndex(3)}
                    />
                </div>
            </div>
        );
    };

    const renderRegisterView = () => {
        return (
            <>
                {showRegist && (
                    <div className="casino-code hover" onClick={() => setShowRegist(true)}>
                        Referral/Promo Code (Optional)
                        <button style={{marginTop: 4, marginLeft: 3}}>
                            <SvgIcon dataKey="icon_Arrow" />
                        </button>
                    </div>
                )}
                {renderInputView("Referral/Promo Code (Optional)", "Referral/Promo Code")}
                {
                    <div className="argument-check box">
                        <div
                            className="ui-checkbox"
                            onClick={() => {
                                checkAgree(!agree);
                            }}>
                            {/* {agree && (
                                <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="s8znn37 icon dot">
                                    <use xlinkHref={`${svgIcons}#icon_Check`}></use>
                                </svg>
                            )} */}
                            {/* {agree && <SvgIcon dataKey="icon_check" />} */}
                            {agree && <SvgIcon dataKey="icon_Check" className="s8znn37 icon dot" />}
                        </div>
                        <div className="label">
                            I agree with
                            <span className="argument">user agreement</span>, and confirm that I am at least 18 years old!
                        </div>
                    </div>
                }
            </>
        );
    };

    const handleRegister = async (data: any) => {
        const res = await apiAuth.register(data.Email, md5(data.password), data.inviteCode);
        if (res.status === 200 && res.data.code === 0) {
            dispatch(setUserInfo(res.data.data));
            props.onClose();
            return;
        }
        toast.error(intl.$t({id: `REGISTER_ERROR_${res.data.code}`}));
    };

    const handleLogin = async (data: any) => {
        const res = await apiAuth.login(data.Email, md5(data.password));
        if (res.status === 200 && res.data.code === 0) {
            dispatch(setUserInfo(res.data.data));
            props.onClose();
            return;
        }
        toast.error(intl.$t({id: `LOGIN_ERROR_${res.data.code}`}));
    };

    const onSubmit = (data: any) => {
        console.log(data, "全局数据");
        setFocus("Email");
        if (data?.password?.length < 6) {
            toast.warn("Password length should not be less than 6 characters");
            return;
        }
        if (isLogin) {
            handleLogin(data);
            return;
        }
        handleRegister(data);
    };

    const renderLoginOrRegistButton = () => {
        const SignInClass = isLogin ? "ui-button button-big s-conic2" : "pure-text";
        const SignUpClass = isLogin ? "pure-text" : "ui-button button-big s-conic";
        return (
            <div className="buttons">
                <button
                    className={SignInClass}
                    type="submit"
                    onClick={(e) => {
                        if (!isLogin) {
                            e.preventDefault();
                            setFocusIndex(1);
                            setLogin(true);
                            setFocus("Email");
                        }
                    }}>
                    {isLogin && <div className="button-inner">Sign in</div>}
                    {!isLogin && <span>Sign in</span>}
                </button>
                <button
                    type="submit"
                    className={SignUpClass}
                    disabled={!isLogin && !agree}
                    onClick={(e) => {
                        if (isLogin) {
                            e.preventDefault();
                            setFocusIndex(1);
                            setLogin(false);
                            setFocus("Email");
                            //TODO
                            // setReadOnly(true);
                            // setTimeout(() => {
                            //     setReadOnly(false);
                            // }, 1000);
                        }
                    }}>
                    {!isLogin && <div className="button-inner">Sign up</div>}
                    {isLogin && <span>Sign up</span>}
                </button>
            </div>
        );
    };

    const renderMainSignWrapView = () => {
        return (
            <div className="main-sign-wrap">
                <div className="ui-scrollview">
                    <div className="s7jt98g s1xilymj" id={isLogin ? "login" : "regist"}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="ui-input">
                                <div className="input-label">
                                    Email
                                    <span className="memorize_new_word bv_bc_game bv_browserName_google_chrome  burning_vocabulary  _id_1648261190659">
                                        Address
                                    </span>
                                </div>
                                <div className={`input-control ${foucsIndex === 1 ? "is-focus" : ""}`}>
                                    <input
                                        {...register("Email")}
                                        readOnly={readOnly}
                                        type="text"
                                        tabIndex={1}
                                        autoComplete="off"
                                        placeholder={isLogin ? "Email" : "Registered Email Address."}
                                        required={true}
                                        onFocus={() => setFocusIndex(1)}
                                    />
                                </div>
                            </div>
                            <div className="ui-input p1mapp22">
                                <div className="input-label">
                                    <div style={{flex: "1 1 0%"}}>Login Password</div>
                                    {isLogin && (
                                        <a
                                            href="#/forget"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setForgetPass(true);
                                            }}
                                            keep-scroll-position="true"
                                            className="forget">
                                            Forgot password
                                        </a>
                                    )}
                                </div>
                                <div className={`input-control ${foucsIndex === 2 ? "is-focus" : ""}`}>
                                    <input
                                        {...register("password")}
                                        type="password"
                                        autoComplete="off"
                                        tabIndex={2}
                                        placeholder="Login Password"
                                        required={true}
                                        onFocus={() => setFocusIndex(2)}
                                    />
                                    <svg className="s1yetyrx icon">
                                        <use xlinkHref="/assets/symbol-defs.da0dce54.svg#icon_View"></use>
                                    </svg>
                                </div>
                            </div>
                            {!isLogin && renderRegisterView()}
                            {renderLoginOrRegistButton()}
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    const renderForgetPassWordView = () => {
        return (
            <div className="ui-dialog fv82rqo" style={{zIndex: 2, transform: "none"}}>
                <button className="dialog-back" style={{opacity: 1, transform: "none"}} onClick={() => setForgetPass(false)}>
                    <SvgIcon dataKey="icon_Arrow" />
                </button>
                <div className="dialog-head has-back has-close">
                    <div className="dialog-title">Reset Password</div>
                </div>
                <button className="close-icon imgc5ma dialog-close" onClick={() => setForgetPass(false)}>
                    <SvgIcon dataKey="icon_Close" />
                </button>
                <div className="i">
                    <div className="ui-input input">
                        <div className="input-label">
                            Registered Email
                            <span className="memorize_new_word bv_bc_game bv_browserName_google_chrome  burning_vocabulary  _id_1648261190659">Address</span>.
                        </div>
                        <div className="input-control">
                            <input type="text" autoComplete="off" />
                        </div>
                    </div>
                    <button className="ui-button button-normal s-conic">
                        <div className="button-inner">Reset Password</div>
                    </button>
                </div>
            </div>
        );
    };

    const pcStyle = {...dialogStyle, width: forgetPass ? "29rem" : dialogStyle.width, marginLeft: forgetPass ? "-14.5rem" : dialogStyle.marginLeft};

    const x = props.visible ? (
        <div
            className={`wnrn3cs ui-dialog-overlayer wnrn3cs-enter-done ${darkModeStatus ? "darken" : ""}`}
            onClick={() => {
                onClickMask();
            }}>
            <div
                className={`ui-dialog-wrap`}
                style={!isMobileStatus ? {...pcStyle} : mobileStyle}
                onClick={(e) => {
                    e.stopPropagation();
                }}>
                <div className={`ui-dialog sl0coco`} style={{zIndex: 2, transform: "none"}}>
                    <button className={`close-icon imgc5ma dialog-close`} onClick={onClickMask}>
                        <SvgIcon dataKey="icon_Close" />
                    </button>
                    <main id={`login-wrap`}>
                        {
                            <div className={"main-left-text"}>
                                <p className="t">
                                    Welcome to<span>BC.GAME</span>
                                </p>
                                <p className="st">
                                    Start your game{" "}
                                    <span className="memorize_new_word bv_bc_game bv_browserName_google_chrome  burning_vocabulary  _id_1663998376603">
                                        journey
                                    </span>{" "}
                                    now!
                                </p>
                            </div>
                        }
                        <div className={"main-content-wrap"}>
                            {renderMainSignWrapView()}
                            {renderOtherWrapView()}
                        </div>
                    </main>
                </div>
                {forgetPass && renderForgetPassWordView()}
            </div>
        </div>
    ) : null;
    return ReactDOM.createPortal(x, document.body);
};

Dialog.defaultProps = {
    closeOnClickMask: true,
};

export default Dialog;
