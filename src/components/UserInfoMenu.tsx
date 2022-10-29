import {useAppDispatch, useAppSelector} from "app/hooks";
import {getUserAvatar, getUserNick, loginOut} from "features/auth/authSlice";
import {isMobile} from "features/setting/settingSlice";
import {useNavigate} from "react-router-dom";
import {getAvatarUrl} from "utils/help";
import imgBB from "../themes/202210/assets/bb.50f42fd3.png";
import SvgIcon from "./SvgIcon";

const UserInfoMenu = () => {
    const statusMobile = useAppSelector(isMobile);
    const nick = useAppSelector(getUserNick);
    const avatar = useAppSelector(getUserAvatar);
    const dispaatch = useAppDispatch();
    const navigate = useNavigate();
    const logout = () => {
        dispaatch(loginOut());
        setTimeout(() => {
            navigate("/");
        }, 100);
    };
    return (
        <>
            <div className="setting-wrap">
                <div className="u1e9ny3w">
                    <div className="user-info">
                        <a href="#/user/profile/6105772" keep-scroll-position="true" className="user-left">
                            <img className="avatar" alt="" src={getAvatarUrl(avatar || "")} />
                            <div className="name-level">
                                <p>{nick}</p>
                                <div className="level">
                                    <div className="luidsk1  levelnums_0">
                                        <img className="img-star" alt="level-star" src={imgBB} />
                                        <img className="img-star" alt="level-star" src={imgBB} />
                                        <img className="img-star" alt="level-star" src={imgBB} />
                                        <img className="img-star" alt="level-star" src={imgBB} />
                                        <img className="img-star" alt="level-star" src={imgBB} />
                                    </div>
                                    <div className="udae0ao user-level type-0">
                                        <div className="level-wrap">
                                            <span>V</span>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div className="right">
                            <SvgIcon dataKey="icon_Setting" />
                            <p>Global Settings</p>
                        </div>
                    </div>
                    <div className="vip-info notranslate">
                        <div className="num">
                            <p>vip 0</p>
                            <p>
                                <span>Need 1 xp</span>vip 1
                            </p>
                        </div>
                        <div className="vip-bg">
                            <div className="bg">
                                <div className="status" style={{width: "2%", background: "rgb(145, 150, 168)"}} />
                            </div>
                            <div className="bg_status" style={{color: "rgb(145, 150, 168)"}}>
                                0%
                            </div>
                        </div>
                    </div>
                    <div className="link-info">
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_UserProfile" />
                                User Information
                            </div>
                        </div>

                        {statusMobile && (
                            <>
                                <div className="link-item">
                                    <div className="hover">
                                        <SvgIcon dataKey="icon_Notice" />
                                        Notification
                                    </div>
                                </div>
                                <div className="link-item">
                                    <div className="hover">
                                        <SvgIcon dataKey="icon_Mail" />
                                        Private Chat
                                    </div>
                                </div>
                            </>
                        )}
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Wallet" />
                                Wallet
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Statistics" />
                                Statistics
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Swap" />
                                BCSwap
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Transaction" />
                                Transactions
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Vault" />
                                Vault Pro
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Support" />
                                Live Support
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_AddFirend" />
                                Refer a friend
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_Affiliate" />
                                Affiliate
                            </div>
                        </div>
                        <div className="link-item">
                            <div className="hover">
                                <SvgIcon dataKey="icon_VipClub" />
                                VIP Club
                            </div>
                        </div>
                    </div>
                    <div className="logout">
                        <span onClick={logout}>
                            <SvgIcon dataKey="icon_Logout" />
                            Logout
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserInfoMenu;
