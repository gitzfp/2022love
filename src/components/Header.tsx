import * as Popover from "@radix-ui/react-popover";
import {useAppSelector} from "app/hooks";
import {getUserAvatar, getUserNick, isLogin} from "features/auth/authSlice";
import {Link} from "react-router-dom";
import {getAvatarUrl} from "utils/help";
import HeaderButtons from "./HeaderButtons";
import SvgIcon from "./SvgIcon";
import UserInfoMenu from "./UserInfoMenu";

const Header = () => {
    const stateIsLogin = useAppSelector(isLogin);
    const nick = useAppSelector(getUserNick);
    const avatar = useAppSelector(getUserAvatar);
    return (
        <div className="hdwgdsr" id="header">
            <div className="header-wrap">
                <div className="header-inner page-max-width-wrap">
                    <div className="pq4145t left">
                        <div className="c1p1xuh3">
                            <Link to="/casino" keep-scroll-position="true" className="header-link-item casino active">
                                <div className="img-wrap">
                                    <SvgIcon dataKey="icon_Casino" />
                                </div>
                                <p>Casino</p>
                            </Link>
                            <a href="/sports" keep-scroll-position="true" className="header-link-item sports">
                                <div className="img-wrap">
                                    <SvgIcon dataKey="icon_Sports" />
                                </div>
                                <p>Sports</p>
                            </a>
                        </div>
                        <div className="page-search-enter"></div>
                    </div>

                    {stateIsLogin ? (
                        <div className="p171ql5d right width-level-1">
                            <div className="w1bms34r wallet-enter">
                                <div className="e1b5f1lw">
                                    <div className="c1vtfqn7 wallet-enter-lef-tinfo">
                                        <div className="t98ghxg">
                                            <img alt="" className="coin-icon" src="/static_images/BCD.black.png" />
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
                                            <span>Deposit</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="uwhhgxe user-info-enter">
                                <img className="avatar" alt="" src={getAvatarUrl(avatar || "")} />
                                <div className="user-level-wrap">
                                    <p className="name">{nick}</p>
                                    <div className="level-wrap">
                                        <p>
                                            VIP<span>0</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="svg">
                                    <Popover.Root>
                                        <Popover.Trigger>
                                            <SvgIcon dataKey="icon_Menu1" />
                                        </Popover.Trigger>
                                        <Popover.Anchor />
                                        <Popover.Portal>
                                            <Popover.Content side="bottom" align="end" alignOffset={-7}>
                                                <Popover.Close />
                                                <Popover.Arrow />
                                                <UserInfoMenu />
                                            </Popover.Content>
                                        </Popover.Portal>
                                    </Popover.Root>
                                </div>
                            </div>
                            <div className="wowap1y private-chat">
                                <SvgIcon dataKey="icon_Mail" />
                            </div>
                            <button className="n1xtcric notice" id="notice">
                                <div className="notice-btn ">
                                    <SvgIcon dataKey="icon_Notice" />
                                </div>
                            </button>
                            <button className="cahxh5l" id="chat">
                                <div className="chat-btn ">
                                    <SvgIcon dataKey="icon_Chat" />
                                    <div className="badge s1pykudy ">99</div>
                                </div>
                            </button>
                        </div>
                    ) : (
                        <div className="sign-in-up">
                            <HeaderButtons />
                            <button className="cahxh5l" id="chat">
                                <div className="chat-btn ">
                                    <SvgIcon dataKey="icon_Chat" />
                                    <div className="badge s1pykudy ">3</div>
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
