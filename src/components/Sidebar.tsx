import {useAppDispatch, useAppSelector} from "app/hooks";
import {isDarkMode, isSideFold, setDarkMode, setSideFold, toggleSideFold} from "features/setting/settingSlice";
import SvgIcon from "./SvgIcon";
import {isLogin} from "features/auth/authSlice";
import logoDark from "themes/202210/assets/logo.7e3c775a.png";
import logoLight from "themes/202210/assets/logo_w.a7af3150.png";
import task from "themes/202210/assets/task.f95e74a7.png";
import spin from "themes/202210/assets/spin.f1e76e9c.png";
import rakeback from "themes/202210/assets/rakeback.c32ab438.png";
import recharge from "themes/202210/assets/recharge.c95783f5.png";
import shitcode from "themes/202210/assets/shitcode.6acf5200.png";
import bcd from "themes/202210/assets/bcd.56665503.png";
import banks from "themes/202210/assets/banks_w.7690cd7a.png";
import banks_dark from "themes/202210/assets/banks.7ee26894.png";

import {useState} from "react";
import {games} from "data/games";
import {Link, useLocation} from "react-router-dom";

const Sidebar = () => {
    const dispatch = useAppDispatch();
    const darkModeStatus = useAppSelector(isDarkMode);
    const sideFoldStatus = useAppSelector(isSideFold);
    const isLoginStatus = useAppSelector(isLogin);
    const [casinoOpen, setCasinoOpen] = useState(false);
    const [sponOpen, setSponOpen] = useState(false);
    const location = useLocation();
    const showSubMenu = location.pathname.substring(0, 6) === "/game/";

    const renderBrand = () => {
        return (
            <div className="game-list-nav-wrap">
                <div className="game-list-shadow-inner">
                    <div className="game-list-wrap hidden-scroll-y">
                        {games.map((game) => (
                            <Link key={game.path} keep-scroll-position="true" className="game-item" to={game.path}>
                                <div className="game-icon">
                                    <SvgIcon dataKey={game.icon} />
                                </div>
                                <span className="game-name">{game.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    const renderFoldBar = () => {
        return (
            <div
                className="p1y3r6mq fold-sidebar"
                style={{
                    transition: "all 300ms ease-out",
                    transform: sideFoldStatus ? "none" : "translate3d(-100%, 0px, 0px)",
                }}>
                <div className="p3xcpks">
                    <div className="header-sidebar-inner">
                        <button className="fold-btn" onClick={() => dispatch(setSideFold(false))}>
                            <SvgIcon dataKey="icon_Tighten" />
                        </button>
                    </div>
                </div>
                <div className="f1gli392 hidden-scroll-y" style={{width: "64px"}}>
                    <div className="b1h890tv">
                        <div className="auto-inner">
                            <img className="auto-task" alt="task" src={task} />
                            <div className="hover-list-wrap">
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
                    </div>
                    <div className="fold-line">
                        <a href="/casino" keep-scroll-position="true" className="fold-navlink-item">
                            <SvgIcon dataKey="icon_Casino" />
                        </a>
                        <a href="/sports" keep-scroll-position="true" className="fold-navlink-item">
                            <SvgIcon dataKey="icon_Sports" />
                        </a>
                        <a href="/lottery" keep-scroll-position="true" className="fold-navlink-item">
                            <SvgIcon dataKey="icon_Lottery" />
                        </a>
                    </div>
                    <div className="fold-line">
                        <a href="/promotion" keep-scroll-position="true" className="fold-navlink-item" target="_self">
                            <SvgIcon dataKey="icon_Promotion" />
                        </a>
                        <a href="/vip-club" keep-scroll-position="true" className="fold-navlink-item" target="_self">
                            <SvgIcon dataKey="icon_VipClub" />
                        </a>
                        <a href="/affiliate" keep-scroll-position="true" className="fold-navlink-item" target="_self">
                            <SvgIcon dataKey="icon_Affiliate" />
                        </a>
                        <a href="https://forum.bc.game/" keep-scroll-position="true" className="fold-navlink-item" target="_blank" rel="noreferrer">
                            <SvgIcon dataKey="icon_Forum" />
                        </a>
                        <a href="/help" keep-scroll-position="true" className="fold-navlink-item" target="_self">
                            <SvgIcon dataKey="icon_ProvablyFair" />
                        </a>
                        <a href="https://blog.bc.game/" keep-scroll-position="true" className="fold-navlink-item" target="_blank" rel="noreferrer">
                            <SvgIcon dataKey="icon_Blog" />
                        </a>
                    </div>
                    <div className="fold-line">
                        <a href="/sponsorship/afa" keep-scroll-position="true" className="fold-navlink-item">
                            <SvgIcon dataKey="icon_Sponsorship" />
                        </a>
                        <button className="fold-navlink-item support">
                            <SvgIcon dataKey="icon_Support" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const renderUnFoldBar = () => {
        return (
            <>
                <div
                    className="p1y3r6mq"
                    style={{
                        transition: "all 300ms ease-out",
                        transform: sideFoldStatus ? "translate3d(-100%, 0px, 0px)" : "none",
                    }}>
                    <div className="p3xcpks">
                        <div className="header-sidebar-inner">
                            <button className="fold-btn" onClick={() => dispatch(toggleSideFold())}>
                                <SvgIcon dataKey="icon_Tighten" />
                            </button>
                            <Link to="/" keep-scroll-position="true" className="logo-pc is-active">
                                <img alt="logo" className="logo-com" src={darkModeStatus ? logoDark : logoLight} />
                            </Link>
                        </div>
                    </div>
                    <div className="u1x00teu hidden-scroll-y">
                        <div className="b12jwa81 bonus-list-wrap">
                            <div className="bl-t">
                                <p className="p-y">Bonus For You</p>
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
                        <div className={`cf2k9fp nav-item-wrap ${casinoOpen && "casino-open"}`}>
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
                                    height: casinoOpen ? "560px" : "0px",
                                }}>
                                <div className="casino-sub-navs">
                                    <Link to="/gamelist/picks-for-you" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_PicksForYou" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Picks For You</span>
                                        </div>
                                    </Link>
                                    <a keep-scroll-position="true" href="/favorites" className={`nav-item ${isLoginStatus ? "" : "no-link"}`}>
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Favorites" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Favorites</span>
                                        </div>
                                    </a>
                                    <a keep-scroll-position="true" href="/recent" className={`nav-item ${isLoginStatus ? "" : "no-link"}`}>
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Recent" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Recent</span>
                                        </div>
                                    </a>
                                    <div className="line" />
                                    <div className={`game-nav-wrap ${showSubMenu && "auto-show"}`}>
                                        <Link to="/casino?tab=brand" keep-scroll-position="true" className="nav-item">
                                            <div className="nav-item-left">
                                                <SvgIcon dataKey="icon_ClassicDice" />
                                            </div>
                                            <div className="nav-item-right">
                                                <span>iBox Originals</span>
                                                <SvgIcon dataKey="icon_Arrow" />
                                            </div>
                                        </Link>
                                        <div className="place" />
                                        {renderBrand()}
                                    </div>
                                    <Link to="/gamelist/slots" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Slots" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Slots</span>
                                        </div>
                                    </Link>
                                    <Link to="/gamelist/live" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_LiveCasino" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Live Casino</span>
                                        </div>
                                    </Link>
                                    <Link to="/gamelist/hot" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_HotGame" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Hot Games</span>
                                        </div>
                                    </Link>
                                    <Link to="/new-releases" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_NewReleases" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>New Releases</span>
                                        </div>
                                    </Link>
                                    <Link to="/tagname/high-volatility" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_HighVolatility" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>High Volatility</span>
                                        </div>
                                    </Link>
                                    <Link to="/tagname/feature-buy-in" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_FeatureBuy-in" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Feature Buy-in</span>
                                        </div>
                                    </Link>
                                    <Link to="/tagname/table-game" keep-scroll-position="true" className="nav-item">
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
                            <Link to="/sports" keep-scroll-position="true" className="nav-item">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Sports" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Sports</span>
                                </div>
                            </Link>
                        </div>
                        <div className="nav-item-wrap sports-nav">
                            <Link to="/lottery" keep-scroll-position="true" className="nav-item">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Lottery" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Lottery</span>
                                </div>
                            </Link>
                        </div>
                        <div className="nav-item-wrap list-nav">
                            <Link to="/promotion" keep-scroll-position="true" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Promotion" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Promotions</span>
                                </div>
                            </Link>
                            <Link to="/vip-club" keep-scroll-position="true" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_VipClub" />
                                </div>
                                <div className="nav-item-right">
                                    <span className="v">
                                        <span className="y">VIP</span>Club
                                    </span>
                                </div>
                            </Link>
                            <Link to="/affiliate" keep-scroll-position="true" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Affiliate" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Affiliate</span>
                                </div>
                            </Link>
                            <a href="https://forum.bc.game/" keep-scroll-position="true" className="nav-item" target="_blank" rel="noreferrer">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Forum" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Forum</span>
                                </div>
                            </a>
                            <Link to="/help" keep-scroll-position="true" className="nav-item" target="_self">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_ProvablyFair" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Provably Fair</span>
                                </div>
                            </Link>
                            <a href="https://blog.bc.game/" keep-scroll-position="true" className="nav-item" target="_blank" rel="noreferrer">
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Blog" />
                                </div>
                                <div className="nav-item-right">
                                    <span>Blog</span>
                                </div>
                            </a>
                        </div>
                        <div className={`s7r37na nav-item-wrap ${sponOpen && "sponsorship-open"}`}>
                            <div className={`toggle-tigger nav-item ${sponOpen && "open-tigger"}`} onClick={() => setSponOpen((open) => !open)}>
                                <div className="nav-item-left">
                                    <SvgIcon dataKey="icon_Sponsorship" />
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
                                    height: sponOpen ? "108px" : "0px",
                                }}>
                                <div className="sponsorship-sub-navs">
                                    <a href="/sponsorship/afa" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_AFA" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>AFA</span>
                                        </div>
                                    </a>
                                    <a href="/sponsorship/cloud-9" keep-scroll-position="true" className="nav-item">
                                        <div className="nav-item-left">
                                            <SvgIcon dataKey="icon_Cloud9" />
                                        </div>
                                        <div className="nav-item-right">
                                            <span>Cloud 9</span>
                                        </div>
                                    </a>
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
                        <div className="nav-item-wrap banks-nav">
                            <div className="banks-img">
                                <img alt="banks" src={darkModeStatus ? banks_dark : banks} />
                            </div>
                            <div className="btns">
                                <button className="ui-button button-normal">
                                    <div className="button-inner">Buy Crypto</div>
                                </button>
                                <button className="ui-button button-normal">
                                    <div className="button-inner">Cashier</div>
                                </button>
                            </div>
                        </div>
                        <div className="lan-fiat-nav">
                            <div className="lqjx7ce lan-fiat-wrap">
                                <div className="lan-local-wrap">
                                    <div className="f-select">
                                        <SvgIcon dataKey="icon_Language" />
                                        <span>English</span>
                                        <SvgIcon dataKey="icon_Arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="theme-nav">
                            <div className="tftnvkv theme-wrap light">
                                <div className="theme-inner">
                                    <button className={`${darkModeStatus && "active"}`} onClick={() => dispatch(setDarkMode(true))}>
                                        <SvgIcon dataKey="icon_Dark" />
                                        <span>Dark</span>
                                    </button>
                                    <button className={`${!darkModeStatus && "active"}`} onClick={() => dispatch(setDarkMode(false))}>
                                        <SvgIcon dataKey="icon_Light" />
                                        <span>Light</span>
                                    </button>
                                    <div className="theme-bg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!sideFoldStatus && <div onClick={() => dispatch(setSideFold(true))} className="wnrn3cs wnrn3cs-enter-done backdrop"></div>}
            </>
        );
    };

    return (
        <>
            {renderFoldBar()}
            {renderUnFoldBar()}
        </>
    );
};

export default Sidebar;
