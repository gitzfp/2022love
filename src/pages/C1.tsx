import google from "../themes/202210/assets/login/google.791b974c.png";
import facebook from "../themes/202210/assets/login/facebook.6a301cc4.png";
import metamask from "../themes/202210/assets/login/metamask.cdab31e0.png";
import telegram from "../themes/202210/assets/login/telegram.1d8e94a7.png";
import walletconnect from "../themes/202210/assets/login/walletconnect.41d5d189.png";
import banner from "../assets/166462273365413.png";
import {useAppDispatch} from "app/hooks";
import {setLoginType} from "features/setting/settingSlice";
import {LoginType} from "utils/constants";
import {SvgIcon} from "components";

const C1 = () => {
    const dispatch = useAppDispatch();
    return (
        <div className="s8spky0">
            <div className="page-max-width-wrap">
                <div className="s608ikl">
                    <div className="container n1ja5cp8">
                        <div className="cont">
                            <div className="title nologin-tit">
                                <div>
                                    Sign Up &amp;{" "}
                                    <b>
                                        <span className="cl-primary">Get</span> Reward
                                    </b>
                                </div>
                                <div>
                                    Up to<b className="cl-primary"> 1 BTC</b>
                                </div>
                            </div>
                            <div className="opt-wrap">
                                <button className="ui-button button-normal s-conic2 btn" onClick={() => dispatch(setLoginType(LoginType.REGIST))}>
                                    <div className="button-inner">Sign Up Now</div>
                                </button>
                                <div className="other-login">
                                    <div className="txt">Or join in directly with</div>
                                    <div className="other-group">
                                        <button id="gg_login" type="button" title="google">
                                            <img alt="google-login" src={google} />
                                        </button>
                                        <button id="fb_login" type="button" title="facebook">
                                            <img alt="facebook-login" src={facebook} />
                                        </button>
                                        <button id="tg_login" type="button" title="telegram">
                                            <img alt="telegram-login" src={telegram} />
                                        </button>
                                        <button type="button">
                                            <img alt="metamask-login" src={metamask} />
                                        </button>
                                        <button type="button">
                                            <img alt="walletconnect-login" src={walletconnect} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="img-banner-wrap">
                        <img className="img-banner" src={banner} alt="" />
                    </div>
                </div>

                {/*  */}

                <div>
                    <div className="s1dfjjv9">
                        <div className="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper" style={{transform: "translate3d(-4440px, 0px, 0px)", transitionDuration: "0ms"}}>
                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index={0} style={{marginRight: "10px"}}>
                                    <a
                                        href="https://forum.bc.game/topic/11711-1500-weekend-spinomenal-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a
                                        href="https://forum.bc.game/topic/11690-4000-top-tier-pg-soft-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/promotion" keep-scroll-position="true" className="img-box w-4">
                                        <img src="https://img2.bc.game/banner/51/2e/5b/166495711670472.png" alt="" />
                                    </a>
                                    <a href="#/wallet/deposit/CHAIN" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
                                    data-swiper-slide-index={1}
                                    style={{marginRight: "10px"}}>
                                    <a href="/vip-club" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/game/crash-trenball" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/task" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/about_bonuscoin" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                                <div className="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index={0} style={{marginRight: "10px"}}>
                                    <a
                                        href="https://forum.bc.game/topic/11711-1500-weekend-spinomenal-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a
                                        href="https://forum.bc.game/topic/11690-4000-top-tier-pg-soft-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/promotion" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/wallet/deposit/CHAIN" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-prev swiper-slide-duplicate-next"
                                    data-swiper-slide-index={1}
                                    style={{marginRight: "10px"}}>
                                    <a href="/vip-club" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/game/crash-trenball" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/task" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/about_bonuscoin" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-duplicate swiper-slide-active"
                                    data-swiper-slide-index={0}
                                    style={{marginRight: "10px"}}>
                                    <a
                                        href="https://forum.bc.game/topic/11711-1500-weekend-spinomenal-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a
                                        href="https://forum.bc.game/topic/11690-4000-top-tier-pg-soft-multiplier-battle/"
                                        keep-scroll-position="true"
                                        className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/promotion" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/wallet/deposit/CHAIN" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev"
                                    data-swiper-slide-index={1}
                                    style={{marginRight: "10px"}}>
                                    <a href="/vip-club" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="/game/crash-trenball" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/task" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                    <a href="#/about_bonuscoin" keep-scroll-position="true" className="img-box w-4">
                                        <img src="/static_images/166660891460239.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <button className="ui-button button-normal navigation-prev-home-banner home-swiper-btn prev">
                            <div className="button-inner">
                                <SvgIcon dataKey="icon_Arrow" />
                            </div>
                        </button>
                        <button className="ui-button button-normal navigation-next-home-banner home-swiper-btn next">
                            <div className="button-inner">
                                <SvgIcon dataKey="icon_Arrow" />
                            </div>
                        </button>
                    </div>
                    <div className="p1vc93lr swiper-home-banner-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                        <span className="swiper-pagination-bullet swiper-pagination-bullet-active" />
                        <span className="swiper-pagination-bullet" />
                    </div>
                </div>

                {/*  */}
            </div>
        </div>
    );
};

export default C1;
