import SvgIcon from "components/SvgIcon";
import btc from "assets/coin/BTC.black.png";
import {useEffect, useState} from "react";
import _ from "lodash";

interface BetHistoryProps {
    isMobileStatus: boolean;
    trendsData: any[];
    trendsOpen: boolean;
    darkModeStatus: boolean;
    playType: "Classic" | "Trenball";
    setTrendsOpen: (open: boolean) => void;
    setPlayType: (type: "Classic" | "Trenball") => void;
    ballConfig: any;
}
const TrendsHistory = (props: BetHistoryProps) => {
    const {isMobileStatus, trendsData, trendsOpen, playType, darkModeStatus, setTrendsOpen, setPlayType} = props;
    const [trendsHistory, setTrendsHistory] = useState(trendsData);
    const transX = isMobileStatus ? "30%" : "20.5%";
    const initialStyle = {
        transitionProperty: "transform",
        width: isMobileStatus ? "133.333%" : "120%",
        translate: "none",
        rotate: "none",
        scale: "none",
        transform: `translate(${transX}, 0px)`,
    };
    const [recentStyle, setReCentStyle] = useState(initialStyle);

    useEffect(() => {
        setTrendsHistory(trendsData);
        const newStyle: any = {...initialStyle};
        newStyle.transform = "translate(0%, 0px)";
        newStyle.transitionDuration = "1s";
        setReCentStyle(initialStyle);
        setTimeout(() => {
            setReCentStyle(newStyle);
        }, 1000);
    }, [trendsData]);

    const cmpareInRange = (num: number, idx: number) => {
        const first = _.divide(props.ballConfig[idx][0], 100);
        const second = _.divide(props.ballConfig[idx][1], 100);
        return props.ballConfig && first <= num && num <= second;
    };

    const isDoubble = (num: number) => {
        return cmpareInRange(num, 1);
    };

    const isMoon = (num: number) => {
        return cmpareInRange(num, 2);
    };
    return (
        <div className="game-view">
            {/*  头部余额，开奖历史 */}
            <div className="goezx9 game-recent co2ws00">
                <div className="j1wms2cr jackpot-enter">
                    <div className="title">
                        <span className="tit">Bankroll</span>
                        <span>BTC</span>
                    </div>
                    <div className="cy2znlo coin notranslate">
                        <div className="amount">
                            <span className="amount-str">¥2054626786</span>
                        </div>
                        <img className="coin-icon" src={btc} />
                    </div>
                </div>
                <div className="recent-list-wrap">
                    <div
                        className="recent-list"
                        id="history"
                        style={recentStyle}
                        // style={{
                        //     width: isMobileStatus ? "133.333%" : "120%",
                        //     // transition: "all 300ms ease-out",
                        //     // transform: trendsOpen ? "translate(-16.6667%, 0px)" : "translate(0%, 0px)",
                    >
                        {trendsHistory.map((item) => {
                            return (
                                <div
                                    key={`${item}`}
                                    className={`game-item ${isDoubble(item.result) ? "is-doubble" : ""} ${isMoon(item.result) ? "is-moon" : ""}`}
                                    style={{width: isMobileStatus ? "25%" : "16.666666666666668%"}}>
                                    <div className="issus">{item.gameCode.substring(0, 5) + "..."}</div>
                                    <div>{item.result}x</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {!isMobileStatus && (
                    <div className="t1nq3y1f">
                        <button className={`ui-button button-normal flex-center ${trendsOpen ? "is-active" : ""}`} onClick={() => setTrendsOpen(!trendsOpen)}>
                            <div className="button-inner">
                                <SvgIcon dataKey="icon_Trends" />
                                <div>Trends</div>
                            </div>
                        </button>
                    </div>
                )}
            </div>
            {/* 游戏 */}
            <div className="wfwdy game-box gingf00">
                <div className="ui-tabs tabs-circle w1wouc5e">
                    <div className="tabs-scroll">
                        <div className="tabs-navs">
                            <button className={`tabs-nav ${playType === "Classic" ? "is-active" : ""}`} onClick={() => setPlayType("Classic")}>
                                Classic
                            </button>
                            <button className={`tabs-nav ${playType === "Trenball" ? "is-active" : ""}`} onClick={() => setPlayType("Trenball")}>
                                Trenball
                            </button>
                        </div>
                    </div>
                </div>
                <div className="c621ai7">
                    <iframe
                        src="http://betfury.games987.com/inhouse/"
                        id="game"
                        style={{position: "absolute", left: 0, top: 0, width: "100%", height: "100%", border: "none"}}></iframe>
                </div>
                <svg className="box-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 996 46">
                    <defs>
                        <linearGradient id="gcardBg" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor={darkModeStatus ? "#31343C" : "#fff"}></stop>
                            <stop offset="100%" stopColor={darkModeStatus ? "#1E2024" : "#b0b6c9"} stopOpacity={darkModeStatus ? "0" : "1"}></stop>
                        </linearGradient>
                    </defs>
                    <g opacity=".899">
                        <path fill="url(#gcardBg)" fillRule="evenodd" d="M0 0h996L892 46H96z" opacity=".598" transform="rotate(-180 498 23)"></path>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default TrendsHistory;
