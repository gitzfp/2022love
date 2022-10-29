import {useAppDispatch, useAppSelector} from "app/hooks";
import {isDarkMode, setDarkMode, setOpenForSidebarMobile} from "features/setting/settingSlice";
import SvgIcon from "./SvgIcon";

import logoDark from "themes/202210/assets/logo.7e3c775a.png";
import logoLight from "themes/202210/assets/logo_w.a7af3150.png";
import task from "themes/202210/assets/task.f95e74a7.png";
import spin from "themes/202210/assets/spin.f1e76e9c.png";
import rakeback from "themes/202210/assets/rakeback.c32ab438.png";
import recharge from "themes/202210/assets/recharge.c95783f5.png";
import shitcode from "themes/202210/assets/shitcode.6acf5200.png";
import bcd from "themes/202210/assets/bcd.56665503.png";
import banks from "themes/202210/assets/banks_m_w.5d353672.png";
import banks_dark from "themes/202210/assets/banks_m.29c913d7.png";
import {useState} from "react";
import {Link} from "react-router-dom";

const SidebarMobile = () => {
    const dispatch = useAppDispatch();
    const darkStatus = useAppSelector(isDarkMode);
    const [casinoOpen, setCasinoOpen] = useState(false);
    const [sponOpen, setSponOpen] = useState(false);

    return (
        <div className="m1dg2tf8" id="sidebar" style={{transform: "none"}}>
            <span className="close-wrap" onClick={() => dispatch(setOpenForSidebarMobile(false))}>
                <SvgIcon dataKey="icon_Close" className="close" />
            </span>
            <div className="sidebar-container">
                <div className="ui-scrollview">
                    <div className="mobile-nav-top">
                        <img alt="logo" src={darkStatus ? logoDark : logoLight} />
                        <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/" className="home-link is-active">
                            <SvgIcon dataKey="icon_Home" />
                            Home
                        </Link>
                    </div>
                    <div className="bonus-refer">
                        <div className="bonus-nav">
                            <div className="b12jwa81 bonus-list-wrap">
                                <div className="bl-t">
                                    <p className="p-y">My VIP Perks</p>
                                    <p className="p-m">
                                        <span>More</span>
                                        <SvgIcon dataKey="icon_Arrow" />
                                    </p>
                                </div>
                                <div className="bl-l">
                                    <div className="bonus-item li-task">
                                        <button className="bonus-item-btn">
                                            <img src={task} className="bonus-img" alt="Task" />
                                        </button>
                                    </div>
                                    <div className="bonus-item li-spin">
                                        <button className="bonus-item-btn">
                                            <img src={spin} className="bonus-img" alt="Spin" />
                                        </button>
                                    </div>
                                    <div className="bonus-item li-rakeback">
                                        <button className="bonus-item-btn locked">
                                            <img className="bonus-img" src={rakeback} alt="Rakeback" />
                                            <SvgIcon dataKey="icon_Locked" className="locked" />
                                        </button>
                                    </div>
                                    <div className="bonus-item li-recharge">
                                        <button className="bonus-item-btn locked">
                                            <img className="bonus-img" src={recharge} alt="Recharge" />
                                            <SvgIcon dataKey="icon_Locked" className="locked" />
                                        </button>
                                    </div>
                                    <div className="bonus-item li-shitcode">
                                        <button className="bonus-item-btn">
                                            <img className="bonus-img" alt="Shitcode" src={shitcode} />
                                        </button>
                                    </div>
                                    <div className="bonus-item li-bcdtips">
                                        <button className="bonus-item-btn">
                                            <img className="bonus-img" src={bcd} alt="BCD Unlock" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="title-list">
                                <p>Tasks</p>
                                <p>Spin</p>
                                <p>Rakeback</p>
                                <p>Recharge</p>
                                <p>Shitcode</p>
                                <p>BCD</p>
                            </div>
                        </div>
                    </div>
                    <div className="mob-wrap">
                        <div className={`m1a0r1u1 nav-item-wrap casino-nav ${casinoOpen && "casino-open"}`}>
                            <div className={`toggle-tigger nav-item ${casinoOpen && "open-tigger"}`} onClick={() => setCasinoOpen((open) => !open)}>
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Casino" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Casino</span>
                                    <SvgIcon dataKey="icon_Arrow" />
                                </div>
                            </div>
                            <div
                                className="v1le0s9l"
                                style={{
                                    transition: "all 300ms ease-out",
                                    height: casinoOpen ? "460px" : "0px",
                                }}>
                                <div className="toogle-sub-navs">
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/gamelist/picks-for-you" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_PicksForYou" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Picks For You</span>
                                        </div>
                                    </Link>
                                    <Link
                                        onClick={() => dispatch(setOpenForSidebarMobile(false))}
                                        to="/"
                                        keep-scroll-position="true"
                                        className="nav-item no-link">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Favorites" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Favorites</span>
                                        </div>
                                    </Link>
                                    <Link
                                        onClick={() => dispatch(setOpenForSidebarMobile(false))}
                                        to="/"
                                        keep-scroll-position="true"
                                        className="nav-item no-link">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Recent" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Recent</span>
                                        </div>
                                    </Link>
                                    <div className="line" />
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/gamelist/brand" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_ClassicDice" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>iBox Originals</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/gamelist/slots" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Slots" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Slots</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/gamelist/live" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_LiveCasino" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Live Casino</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/gamelist/hot" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_HotGame" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Hot Games</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/new-releases" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_NewReleases" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>New Releases</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/tagname/high-volatility" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_HighVolatility" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>High Volatility</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/tagname/feature-buy-in" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_FeatureBuy-in" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Feature Buy-in</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/tagname/table-game" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_TableGame" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Table Games</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item-wrap sports-nav">
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/sports" className="nav-item">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Sports" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Sports</span>
                                </div>
                            </Link>
                        </div>
                        <div className="nav-item-wrap sports-nav">
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/lottery" className="nav-item">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Lottery" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Lottery</span>
                                </div>
                            </Link>
                        </div>
                        <div className="nav-item-wrap list-nav">
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/promotion" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Promotion" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Promotions</span>
                                </div>
                            </Link>
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/vip-club" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_VipClub" />
                                </div>
                                <div className="nav-item-right">
                                    <span className="v">
                                        <span className="y">VIP</span>Club
                                    </span>
                                </div>
                            </Link>
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/affiliate" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Affiliate" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Affiliate</span>
                                </div>
                            </Link>
                            <a href="https://forum.bc.game/" className="nav-item" target="_blank" rel="noreferrer">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Forum" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Forum</span>
                                </div>
                            </a>
                            <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/help" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_ProvablyFair" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Provably Fair</span>
                                </div>
                            </Link>
                            <a href="https://blog.bc.game/" className="nav-item" target="_blank" rel="noreferrer">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Blog" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Blog</span>
                                </div>
                            </a>
                        </div>
                        <div className={`m1a0r1u1 nav-item-wrap sponsorship-nav ${sponOpen && "sponsorship-open"}`}>
                            <div className={`toggle-tigger nav-item ${sponOpen && "open-tigger"}`} onClick={() => setSponOpen((open) => !open)}>
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Casino" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Sponsorships</span>
                                    <SvgIcon dataKey="icon_Arrow" />
                                </div>
                            </div>
                            <div
                                className="v1le0s9l"
                                style={{
                                    transition: "all 300ms ease-out",
                                    height: sponOpen ? "88px" : "0px",
                                }}>
                                <div className="toogle-sub-navs">
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/sponsorship/afa" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_AFA" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>AFA</span>
                                        </div>
                                    </Link>
                                    <Link onClick={() => dispatch(setOpenForSidebarMobile(false))} to="/sponsorship/cloud-9" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Cloud9" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Cloud 9</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="nav-item-wrap support-nav">
                            <button className="nav-item">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Support" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Live Support</span>
                                </div>
                            </button>
                        </div>
                        <div className="buy-wrap">
                            <div className="banks-img">
                                <img alt="banks" src={darkStatus ? banks_dark : banks} />
                            </div>
                            <div className="buy-btns">
                                <button className="ui-button button-normal">
                                    <div className="button-inner">Buy Crypto</div>
                                </button>
                                <button className="ui-button button-normal">
                                    <div className="button-inner">Cashier</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="theme-lan-wrap">
                        <div className="theme-lan">
                            <div className="lqjx7ce lan-fiat-wrap">
                                <div className="lan-local-wrap">
                                    <div className="f-select">
                                        <span>English</span>
                                        <SvgIcon dataKey="icon_Arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className={`tftnvkv theme-wrap ${!darkStatus && "light"}`}>
                                <button className={darkStatus ? "active" : ""} onClick={() => dispatch(setDarkMode(true))}>
                                    <SvgIcon dataKey="icon_Dark" />
                                </button>
                                <button className={darkStatus ? "" : "active"} onClick={() => dispatch(setDarkMode(false))}>
                                    <SvgIcon dataKey="icon_Light" />
                                </button>
                                <div className="theme-bg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SidebarMobile;
