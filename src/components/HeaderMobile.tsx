import {useAppSelector} from "app/hooks";
import {isDarkMode} from "features/setting/settingSlice";
import HeaderButtons from "./HeaderButtons";

import logoSmall from "themes/202210/assets/logo_small_w.b0b85b67.png";
import logoDark from "themes/202210/assets/logo.7e3c775a.png";
import logoLight from "themes/202210/assets/logo_w.a7af3150.png";
import {useNavigate} from "react-router-dom";
import SvgIcon from "./SvgIcon";
import UserInfoMenu from "./UserInfoMenu";
import * as Popover from "@radix-ui/react-popover";
import {isLogin} from "features/auth/authSlice";

const HeaderMobile = () => {
    const darkModeStatus = useAppSelector(isDarkMode);
    const stateIsLogin = useAppSelector(isLogin);
    const navigate = useNavigate();

    return (
        <div className="myum48i mobile-header" style={{transform: "translate3d(0px, 0%, 0px)"}}>
            {stateIsLogin ? (
                <div className="top">
                    <div className="mob-logo-sidebar-wrap">
                        <div className="logo-wrap">
                            <img alt="logo" src={logoSmall} />
                        </div>
                    </div>
                    <div className="page-search-enter small-search-enter" />
                    <div className="w1bms34r wallet-enter">
                        <div className="e1b5f1lw">
                            <div className="c1vtfqn7 wallet-enter-lef-tinfo">
                                <div className="t98ghxg">
                                    <img className="coin-icon" src="/static_images/BCD.black.png" />
                                    <span className="currency">BCD</span>
                                    <SvgIcon dataKey="icon_Arrow" />
                                </div>
                                <div className="cy2znlo coin notranslate balance">
                                    <div className="amount">
                                        <span className="amount-str">$0.00</span>
                                    </div>
                                </div>
                            </div>
                            <button className="ui-button button-normal s-conic2 b1tcd7th">
                                <div className="button-inner">
                                    <SvgIcon dataKey="icon_Wallet" />
                                    <span>Wallet</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="n10kn2q2">
                        <img className="avatar " src="/static_images/avatar.4156283.png" />
                    </div>
                    <div className="uwhhgxe user-info-enter">
                        <div className="svg" id="userMenu">
                            <Popover.Root>
                                <Popover.Anchor>
                                    <Popover.Trigger>
                                        <SvgIcon dataKey="icon_Menu1" />
                                    </Popover.Trigger>
                                </Popover.Anchor>
                                <Popover.Portal>
                                    <div className="userMenuMini" style={{minWidth: 0, width: "100%"}}>
                                        <Popover.Content side="bottom" asChild={true} sideOffset={18} align="end" alignOffset={-18}>
                                            <UserInfoMenu />
                                        </Popover.Content>
                                    </div>
                                </Popover.Portal>
                            </Popover.Root>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="login-top">
                    <div className="mob-logo-sidebar-wrap">
                        <div className="logo-wrap" onClick={() => navigate("/")}>
                            <img alt="logo" src={darkModeStatus ? logoDark : logoLight} className="big" />
                        </div>
                    </div>
                    <div className="header-login">
                        <div className="page-search-enter small-search-enter" />
                        <HeaderButtons />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderMobile;
