import SvgIcon from "components/SvgIcon";
import {useEffect, useState, useRef} from "react";
import jpy from "assets/coin/JPY.black.png";
import {useAppSelector} from "app/hooks";
import {isDarkMode, isMobile} from "features/setting/settingSlice";
import {getToken, getUserMoneyType} from "features/auth/authSlice";
import _ from "lodash";
import apiAuth from "api/auth";
import {useSlider} from "react-use";
import TrendsHistory from "./TrendsHistory";

enum GameState {
    init = 0,
    bet = 1,
    fly = 2,
    wait = 3,
}

enum BallColor {
    Normal = 0,
    Red = 1,
    Green = 2,
    Moon = 3,
}

const Crash = () => {
    const [playType, setPlayType] = useState<"Classic" | "Trenball">("Classic");
    const [isAutoType, setIsAutoType] = useState(false);
    const [isAuto, setIsAuto] = useState(false);
    const isAutoRef = useRef(false);
    const [ballColor, setBallColor] = useState(BallColor.Normal);
    const ballColorRef = useRef(BallColor.Normal);
    const [amount, setAmount] = useState("");
    const [cashout, setCashout] = useState("");
    const [autoBetCount, setAutoBetCount] = useState("10");
    const [autoIncreaseOnWin, setAutoIncreaseOnWin] = useState("0");
    const [autoIncreaseOnLose, setAutoIncreaseOnLose] = useState("0");
    const [stopOnWin, setStopOnWin] = useState("100.00");
    const [stopOnLose, setStopOnLose] = useState("100.00");
    const [trendsData, setTrendsData] = useState<any[]>([]);
    const [tableData, setTableData] = useState<any[]>([]);

    const isMobileStatus = useAppSelector(isMobile);
    const darkModeStatus = useAppSelector(isDarkMode);
    const token = useAppSelector(getToken);
    const moneyType = useAppSelector(getUserMoneyType);
    const [focusAmount, setFocusAmount] = useState(false);
    const [focusCashout, setFocusCashout] = useState(false);
    const [focusAutoBetCount, setFocusAutoBetCount] = useState(false);
    const [focusAutoWin, setFocusAutoWin] = useState(false);
    const [focusAutoLose, setFocusAutoLose] = useState(false);
    const [focusStopWin, setFocusStopWin] = useState(false);
    const [focusStopLose, setFocusStopLose] = useState(false);
    const [openAutoOnWin, setOpenAutoOnWin] = useState(false);
    const [openAutoOnLose, setOpenAutoOnLose] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [tableIsTrenball, setTableIsTrenball] = useState(false);
    const [tableShowMore, setTableShowMore] = useState(false);
    const [trendsOpen, setTrendsOpen] = useState(false);
    const sliderRef = useRef(null);
    const {value} = useSlider(sliderRef, {
        onScrub(value) {
            console.log("jinhua--slidervalue=", value);
            if (betRangeList.current.length) {
                setAmount(`${_.divide(betRangeList.current[moneyType - 1][1], 100000000) * value}`);
            }
        },
    });
    const [showSlider, setShowSlider] = useState(false);

    const [ballConfig, setBallConfig] = useState();
    const [maxprofit, setMaxprofit] = useState(0);
    const [chance, setChance] = useState("0.99");
    const minCashout = useRef<number>(1.01);
    const maxCashout = useRef<number>(1000);
    const betRangeList = useRef([]);
    const rtp = useRef(0.99);
    const [gameState, setGameState] = useState(GameState.init);
    const [height, setHeight] = useState(0);
    const [loadConfigFinish, setLoadConfigFinish] = useState(false);
    // 当前局投注了
    const [currentRoundBet, setCurrentRoundBet] = useState(false);
    // 需要投注下一句
    const needBetNextRound = useRef(false);
    // 自动投注剩余局
    const autoCount = useRef(0);
    // 自动投注期间赢了多少
    const autoWin = useRef(0);
    // 自动投注期间输了多少
    const autoLose = useRef(0);
    // 自动投注金额
    const autoAmount = useRef(0);

    const [showBetBtn, setShowBetBtn] = useState(false);
    const [showNextBetBtn, setShowNextBetBtn] = useState(false);
    const [showLoadingBtn, setShowLoadingBtn] = useState(false);
    const [showLoadingCancleBtn, setShowLoadingCancleBtn] = useState(false);
    const [showCashoutBtn, setShowCashoutBtn] = useState(false);
    const nextBetAmount = useRef(0);
    const currentBetAmount = useRef(0);

    const btnStateArr = [setShowBetBtn, setShowNextBetBtn, setShowLoadingBtn, setShowLoadingCancleBtn, setShowCashoutBtn];

    const resetBtnState = () => {
        btnStateArr.forEach((fun: any) => {
            fun(false);
        });
    };

    const handleBet = (betAmount: number) => {
        const gameIframe = document.getElementById("game") as HTMLIFrameElement;
        const minAmount = _.divide(betRangeList.current[moneyType - 1][0], 100000000);
        const maxAmount = _.divide(betRangeList.current[moneyType - 1][1], 100000000);
        const realBetNum = _.clamp(Number(betAmount), minAmount, maxAmount);
        const realCashout = _.clamp(Number(cashout), minCashout.current, maxCashout.current);
        setAmount(`${realBetNum}`);
        setCashout(`${realCashout}`);
        let postMsg = {
            action: "bet",
            param: {
                currency: moneyType,
                cashout: playType === "Classic" ? _.multiply(realCashout, 100) : 0,
                betNum: _.multiply(realBetNum, 100000000),
                betColor: playType === "Classic" ? BallColor.Normal : ballColorRef.current,
            },
        };
        console.log("fupzheng=====下注", postMsg);

        gameIframe.contentWindow?.postMessage(JSON.stringify(postMsg), "*");
    };

    const handleBtnState = (param: GameState) => {
        //wait阶段可bet下一局
        //wait阶段可以取消下注，bet阶段和飞行阶段不可以取消
        //飞行阶段有下注显示cashout
        switch (param) {
            case GameState.bet:
                resetBtnState();
                if (nextBetAmount.current > 0) {
                    console.log("fupzheng=====bet下一局" + nextBetAmount.current);
                    handleBet(nextBetAmount.current);
                    currentBetAmount.current = nextBetAmount.current;
                    nextBetAmount.current = 0;
                    setShowLoadingBtn(true);
                } else {
                    setShowBetBtn(true);
                }
                break;
            case GameState.fly:
                resetBtnState();
                if (currentBetAmount.current > 0) {
                    setShowCashoutBtn(true);
                } else {
                    setShowNextBetBtn(true);
                }
                currentBetAmount.current = 0;
                break;
            case GameState.wait:
                resetBtnState();
                if (nextBetAmount.current > 0) {
                    setShowLoadingCancleBtn(true);
                } else {
                    setShowNextBetBtn(true);
                }
                currentBetAmount.current = 0;
                break;
            default:
                resetBtnState();
        }
    };

    const resetWinOrLose = () => {
        resetBtnState();
        currentBetAmount.current = 0;
        nextBetAmount.current = 0;
        setShowNextBetBtn(true);
    };

    const receivedMessage = async (msg: any) => {
        if (msg.data && typeof msg.data === "string") {
            try {
                const msgData = JSON.parse(msg.data);
                if (msgData?.action !== "height" && msgData?.action !== "updatePlayerList") console.log("fupzheng", msgData);

                const gameIframe = document.getElementById("game") as HTMLIFrameElement;
                if (msgData?.action === "inited") {
                    let userToken = token;
                    if (!token) {
                        const {data} = await apiAuth.ghostLogin();
                        if (data.code === 0) {
                            userToken = data.data.token;
                        }
                    }
                    let postMsg = {
                        action: "loadGame",
                        param: {
                            gameId: 3,
                            gameName: encodeURIComponent("火箭crash"),
                            currency: moneyType,
                            token: userToken,
                            orientation: 2,
                        },
                    };
                    gameIframe.contentWindow?.postMessage(JSON.stringify(postMsg), "*");
                } else if (msgData?.action === "Config") {
                    console.log("fupzheng====config", msgData);
                    const {ball, bets, cash_out, default_out, max_profit, rtp: rtpValue} = msgData.param;
                    setBallConfig(ball);
                    betRangeList.current = bets;
                    minCashout.current = _.divide(cash_out[0], 100);
                    maxCashout.current = _.divide(cash_out[1], 100);
                    setMaxprofit(max_profit);
                    rtp.current = rtpValue;
                    if (loadConfigFinish === false) {
                        setCashout(_.divide(default_out, 100).toFixed(2));
                        const minAmount = _.divide(betRangeList.current[moneyType - 1][0], 100000000);
                        setAmount(minAmount.toFixed(2));
                    }
                    setLoadConfigFinish(true);
                } else if (msgData?.action === "betReply") {
                    //下注成功
                    setBtnLoading(false);
                    setCurrentRoundBet(true);
                } else if (msgData?.action === "win") {
                    resetWinOrLose();
                    console.log("fupzheng win");
                    setCurrentRoundBet(false);
                    if (isAutoRef.current) {
                        autoWin.current += _.divide(Number(msgData.param.winAmount), 100000000);
                        console.log("fupzheng---autoWin", autoWin.current, Number(stopOnWin));

                        if (autoWin.current >= Number(stopOnWin)) {
                            autoCount.current = 0;
                            isAutoRef.current = false;
                            setIsAuto(false);
                            setBallColor(BallColor.Normal);
                            ballColorRef.current = BallColor.Normal;
                            return;
                        }
                        if (openAutoOnWin) {
                            autoAmount.current += _.multiply(autoAmount.current, _.divide(Number(autoIncreaseOnWin), 100));
                        }
                    } else {
                        setBallColor(BallColor.Normal);
                    }
                } else if (msgData?.action === "lose") {
                    resetWinOrLose();
                    console.log("fupzheng lose");
                    setCurrentRoundBet(false);
                    if (isAutoRef.current) {
                        autoLose.current += autoAmount.current;
                        console.log("fupzheng---autoWin.current", autoWin.current);
                        console.log("fupzheng---stopOnWin", Number(stopOnWin));
                        if (autoLose.current >= Number(stopOnLose)) {
                            autoCount.current = 0;
                            setIsAuto(false);
                            isAutoRef.current = false;
                            setBallColor(BallColor.Normal);
                            ballColorRef.current = BallColor.Normal;
                            return;
                        }
                        if (openAutoOnLose) {
                            autoAmount.current += _.multiply(autoAmount.current, _.divide(Number(autoIncreaseOnLose), 100));
                        }
                    } else {
                        setBallColor(BallColor.Normal);
                    }
                } else if (msgData?.action === "gameStates") {
                    setGameState(msgData.param);
                    handleBtnState(msgData.param);
                    // handleAutoBet();
                    // if (msgData.param === GameState.bet && needBetNextRound.current) {
                    //     needBetNextRound.current = false;
                    //     console.log("jinhua触发下局投注===000金额：", amount);
                    //     handleManualBet();
                    // }

                    if (msgData.param === GameState.bet && autoCount.current > 0) {
                        autoCount.current--;
                        console.log("jinhua触发自动投注", autoCount.current, isAutoRef.current);
                        handleAutoBet();
                    }
                } else if (msgData?.action === "height") {
                    setHeight(msgData.param);
                } else if (msgData?.action === "appendHistoryList") {
                    trendsData?.push(msgData.param);
                    const newTrends = trendsData?.slice(isMobileStatus ? -4 : -6);
                    console.log("fupzheng,append historyResults:", newTrends);

                    setTrendsData(newTrends);
                } else if (msgData?.action === "updateHistoryList") {
                    const newTrends = msgData?.param?.historyResults.slice(isMobileStatus ? -4 : -6);
                    console.log("fupzheng,historyResults:", newTrends);
                    setTrendsData(newTrends);
                }
            } catch (error) {}
        }
    };

    const handleManualBet = () => {
        const gameIframe = document.getElementById("game") as HTMLIFrameElement;

        if (playType === "Classic" && gameState === GameState.fly && currentRoundBet) {
            console.log("jinhua===cashout了");
            let cashoutMsg = {
                action: "cashout",
                param: null,
            };
            gameIframe.contentWindow?.postMessage(JSON.stringify(cashoutMsg), "*");
            return;
        }

        if (Number(cashout) === 0 || Number(amount) === 0) {
            return;
        }
        if (playType === "Trenball" && currentRoundBet && gameState === GameState.fly) {
            return;
        }
        if (gameState !== GameState.bet) {
            needBetNextRound.current = !btnLoading;
            console.log("jinhua下局投注", needBetNextRound.current);
            setBtnLoading(!btnLoading);
            return;
        }

        // 投注本局
        setBtnLoading(true);
        const minAmount = _.divide(betRangeList.current[moneyType - 1][0], 100000000);
        const maxAmount = _.divide(betRangeList.current[moneyType - 1][1], 100000000);
        const realBetNum = _.clamp(Number(amount), minAmount, maxAmount);
        const realCashout = _.clamp(Number(cashout), minCashout.current, maxCashout.current);
        setAmount(`${realBetNum}`);
        setCashout(`${realCashout}`);
        let postMsg = {
            action: "bet",
            param: {
                currency: moneyType,
                cashout: playType === "Classic" ? _.multiply(realCashout, 100) : 0,
                betNum: _.multiply(realBetNum, 100000000),
                betColor: playType === "Classic" ? BallColor.Normal : ballColorRef.current,
            },
        };
        console.log("jinhua", postMsg);

        gameIframe.contentWindow?.postMessage(JSON.stringify(postMsg), "*");
    };

    const handleAutoBet = () => {
        const gameIframe = document.getElementById("game") as HTMLIFrameElement;

        setBtnLoading(true);
        const minAmount = _.divide(betRangeList.current[moneyType - 1][0], 100000000);
        const maxAmount = _.divide(betRangeList.current[moneyType - 1][1], 100000000);
        // 第一局
        if (Number(autoBetCount) === autoCount.current) {
            autoAmount.current = Number(amount);
            setAmount(`${_.clamp(autoAmount.current, minAmount, maxAmount)}`);
        }
        const realBetNum = _.clamp(autoAmount.current, minAmount, maxAmount);
        const realCashout = _.clamp(Number(cashout), minCashout.current, maxCashout.current);
        setAmount(`${realBetNum}`);
        setCashout(`${realCashout}`);
        let postMsg = {
            action: "bet",
            param: {
                currency: moneyType,
                cashout: playType === "Classic" ? _.multiply(realCashout, 100) : 0,
                betNum: _.multiply(realBetNum, 100000000),
                betColor: playType === "Classic" ? BallColor.Normal : ballColorRef.current,
            },
        };
        console.log("fupzheng---postMsg", postMsg);

        gameIframe.contentWindow?.postMessage(JSON.stringify(postMsg), "*");
    };

    useEffect(() => {
        if (Number(cashout) > 0) {
            setChance(_.multiply(rtp.current, _.divide(1, Number(cashout))).toFixed(2));
            return;
        }
        setChance("0.99");
    }, [cashout]);

    //const [autoBetCount, setAutoBetCount] = useState("10");
    //const [autoIncreaseOnWin, setAutoIncreaseOnWin] = useState("0");
    //const [autoIncreaseOnLose, setAutoIncreaseOnLose] = useState("0");

    useEffect(() => {
        console.log("fupzheng=======stoponWin or lose变化");
        window.addEventListener("message", receivedMessage);
        return () => {
            window.removeEventListener("message", receivedMessage);
        };
    }, [autoBetCount, autoIncreaseOnWin, autoIncreaseOnLose, stopOnWin, stopOnLose, amount, cashout, trendsData]);

    useEffect(() => {
        setTableData(isMobileStatus ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16]);
        // setTrendsData(isMobileStatus ? [1, 2, 3, 4] : [1, 2, 3, 4, 5, 6]);
    }, [isMobileStatus]);

    // 开始自动模式
    const hanldeStartOrStopAuto = (color: BallColor) => {
        const resultColor = isAuto ? BallColor.Normal : color;
        setBallColor(resultColor);
        ballColorRef.current = resultColor;
        if (isAuto) {
            autoCount.current = 0;
        } else {
            autoCount.current = Number(autoBetCount);
        }
        setIsAuto(!isAuto);
        isAutoRef.current = !isAuto;
        console.log(`fupzheng:=====${!isAuto ? "开启" : "关闭"}` + autoCount.current);
    };

    // 金额乘以2
    const multiplyAmount = () => {
        const result = _.multiply(Number(amount), 2);
        setAmount(`${result}`);
    };

    // 金额除以2
    const divideAmount = () => {
        const result = _.divide(Number(amount), 2);
        setAmount(`${result}`);
    };

    const renderBtnText = () => {
        // if (gameState === GameState.fly && currentRoundBet) {
        //     return <div>Cash out</div>;
        // }
        // return <div>{btnLoading ? "Loading..." : "Bet"}</div>;
        // console.log("fupzheng 重新渲染UI");
        let btnText = "";
        if (showBetBtn) {
            btnText = "Bet";
        } else if (showNextBetBtn) {
            btnText = "Bet";
        } else if (showLoadingBtn || !loadConfigFinish) {
            btnText = "Loading";
        } else if (showCashoutBtn && height > 0) {
            btnText = Number(amount) * height + "";
        } else if (showLoadingCancleBtn) {
            btnText = "Loading";
        }
        return <div>{btnText}</div>;
    };

    const renderBetSubText = () => {
        // if (gameState !== GameState.bet && !currentRoundBet) {
        //     return <div className="sub-text">{btnLoading ? "(Cancel)" : "(Next round)"}</div>;
        // }
        let subText = "";
        if (showLoadingCancleBtn) {
            subText = "(Cancel)";
        } else if (showNextBetBtn) {
            subText = "(Next round)";
        } else if (showCashoutBtn) {
            subText = "Cashout";
        }
        if (subText) {
            return <div className="sub-text">{subText}</div>;
        }
        return <></>;
    };

    const handleBtnClick = () => {
        if (showBetBtn) {
            console.log("fupzheng 点击了下注Bet");
            resetBtnState();
            nextBetAmount.current = 0;
            currentBetAmount.current = Number(amount);
            handleBet(Number(amount));
            setShowLoadingBtn(true);
            console.log("fupzheng 点击了下注Bet");
        } else if (showNextBetBtn) {
            resetBtnState();
            nextBetAmount.current = Number(amount);
            setShowLoadingCancleBtn(true);
            console.log("fupzheng 点击了nextBet:=====cashout:" + nextBetAmount.current + "========amount" + amount);
        } else if (showLoadingCancleBtn) {
            resetBtnState();
            nextBetAmount.current = 0;
            setShowNextBetBtn(true);
            console.log("fupzheng 点击了loading cancle");
        } else if (showCashoutBtn) {
            //TODO 结算
            const gameIframe = document.getElementById("game") as HTMLIFrameElement;
            let postMsg = {
                action: "cashout",
                param: null,
            };
            console.log("fupzheng=====cashout", postMsg);
            gameIframe.contentWindow?.postMessage(JSON.stringify(postMsg), "*");
            resetBtnState();
            setShowNextBetBtn(true);
        } else {
            console.log("fupzheng====点击了未知情况");
        }
    };

    const renderCashoutBtn = () => {
        return (
            <div className="ui-input small s335e7t is-bold">
                <div className="input-label">
                    <div className="chance-title">
                        <div className="auto-title" title="Auto cash out">
                            Auto cash out
                        </div>
                        <div>
                            Chance&nbsp;&nbsp;<span className="chance-num">{`${chance}%`}</span>
                        </div>
                    </div>
                </div>
                <div className={`input-control ${focusCashout ? "is-focus" : ""}`}>
                    <input
                        type="text"
                        value={cashout}
                        onChange={(e) => setCashout(e.target.value)}
                        onFocus={() => setFocusCashout(true)}
                        onBlur={() => setFocusCashout(false)}
                    />
                    <div className="payout-txt" onClick={() => setCashout(Number(cashout).toFixed(2))}>
                        ×
                    </div>
                </div>
            </div>
        );
    };

    // 手动模式操作视图
    const renderManualView = () => {
        if (playType === "Classic") {
            return (
                <div className="wpn4k9r">
                    <button
                        disabled={!loadConfigFinish}
                        className={`ui-button button-big ${showLoadingBtn || showLoadingCancleBtn ? "s-conic4" : "s-conic"} b1m9zn1q`}
                        onClick={handleBtnClick}>
                        <div className="button-inner">
                            {renderBtnText()}
                            {renderBetSubText()}
                        </div>
                    </button>
                    <div className="forms">
                        {/* 下面的input 稍后会提取成通用组件 */}
                        <div className="ui-input small cu6byd0 c8960cw game-coininput">
                            <div className="input-label">
                                <div className="l6njnd7 label">
                                    <div>Amount</div>
                                    <div className="max-profit">
                                        <SvgIcon dataKey="icon_Inform" />
                                        <div className="tip">
                                            <span className="tit">Max Profit:&nbsp;</span>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">{`¥${maxprofit}`}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="label-amount">0.00000010 BTC</div> */}
                            </div>
                            <div className={`input-control ${focusAmount ? "is-focus" : ""}`}>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    onFocus={() => setFocusAmount(true)}
                                    onBlur={() => setFocusAmount(false)}
                                />
                                <img alt="" className="coin-icon" src={jpy} />
                                <div className="button-group">
                                    <button onClick={divideAmount}>/2</button>
                                    <button onClick={multiplyAmount}>x2</button>
                                    <div className="fix-layer" style={{opacity: showSlider ? 1 : 0}}>
                                        <button
                                            onClick={() => {
                                                const minAmount = _.divide(betRangeList.current[moneyType - 1][0], 100000000);
                                                setAmount(`${minAmount}`);
                                            }}>
                                            Min
                                        </button>
                                        <div className="ui-slider" ref={sliderRef}>
                                            <div className="slider-after" style={{transform: `scaleX(${value})`}}></div>
                                            <div className="slider-handler-wrap" style={{transform: `translateX(${value * 100}%)`}}>
                                                <button className="slider-handler"></button>
                                            </div>
                                            <div className="slider-before" style={{transform: `scaleX(${1 - value})`}}></div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                const maxAmount = _.divide(betRangeList.current[moneyType - 1][1], 100000000);
                                                setAmount(`${maxAmount}`);
                                            }}>
                                            Max
                                        </button>
                                    </div>
                                    <button className="t11i7rl9" onClick={() => setShowSlider(!showSlider)}>
                                        <SvgIcon dataKey="icon_Arrow" />
                                        <SvgIcon dataKey="icon_Arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {renderCashoutBtn()}
                    </div>
                </div>
            );
        }
        return (
            <div className="s7ywhry manual-control">
                <div className="ui-input small cu6byd0 c8960cw game-coininput">
                    <div className="input-label">
                        <div className="l6njnd7 label">
                            <div>Amount</div>
                        </div>
                        {/* <div className="label-amount">0.00000010 BTC</div> */}
                    </div>
                    <div className={`input-control ${focusAmount ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onFocus={() => setFocusAmount(true)}
                            onBlur={() => setFocusAmount(false)}
                        />
                        <img alt="" className="coin-icon" src={jpy} />
                        <div className="button-group">
                            <button onClick={divideAmount}>/2</button>
                            <button onClick={multiplyAmount}>x2</button>
                            <button className="t11i7rl9">
                                <SvgIcon dataKey="icon_Arrow" />
                                <SvgIcon dataKey="icon_Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[0][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type-200 ${ballColor === BallColor.Red ? "is-active" : ""}`}
                        onClick={() => {
                            setBallColor(BallColor.Red);
                            ballColorRef.current = BallColor.Red;
                            handleManualBet();
                        }}>
                        <div className="button-inner">
                            <div>{currentRoundBet ? "Betting" : "Bet Red"}</div>
                            {gameState !== GameState.bet && !currentRoundBet && <div className="sub-txt">(Next round)</div>}
                        </div>
                    </button>
                </div>
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[1][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type200 ${ballColor === BallColor.Green ? "is-active" : ""}`}
                        onClick={() => {
                            setBallColor(BallColor.Green);
                            ballColorRef.current = BallColor.Green;
                            handleManualBet();
                        }}>
                        <div className="button-inner">
                            <div>{currentRoundBet ? "Betting" : "Bet Green"}</div>
                            {gameState !== GameState.bet && !currentRoundBet && <div className="sub-txt">(Next round)</div>}
                        </div>
                    </button>
                </div>
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[2][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type1000 ${ballColor === BallColor.Moon ? "is-active" : ""}`}
                        onClick={() => {
                            setBallColor(BallColor.Moon);
                            ballColorRef.current = BallColor.Moon;
                            handleManualBet();
                        }}>
                        <div className="button-inner">
                            <div>{currentRoundBet ? "Betting" : "Bet Moon"}</div>
                            {gameState !== GameState.bet && !currentRoundBet && <div className="sub-txt">(Next round)</div>}
                        </div>
                    </button>
                </div>
            </div>
        );
    };

    // 自动模式下操作button
    const renderAutoButtons = () => {
        if (playType === "Classic") {
            return (
                <div className="ui-input small cu6byd0 is-bold">
                    <div className="input-label" />
                    <div className="input-control" style={{backgroundColor: "transparent"}}>
                        <button className="ui-button s-conic2 b1m9zn1q script-add" style={{margin: "1.5rem auto"}}>
                            <div className="button-inner" onClick={() => hanldeStartOrStopAuto(BallColor.Normal)}>
                                {isAuto ? "Stop Auto Bet" : "Start Auto"}
                            </div>
                        </button>
                    </div>
                </div>
            );
        }
        return (
            <div className="buttons">
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[0][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type-200 ${ballColor === BallColor.Red ? "is-active" : ""}`}
                        disabled={isAuto && ballColor !== BallColor.Red}
                        onClick={() => hanldeStartOrStopAuto(BallColor.Red)}>
                        <div className="button-inner">
                            <div>{ballColor === BallColor.Red ? "Stop Auto Bet" : "Bet Red"}</div>
                        </div>
                    </button>
                </div>
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[1][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type200 ${ballColor === BallColor.Green ? "is-active" : ""}`}
                        disabled={isAuto && ballColor !== BallColor.Green}
                        onClick={() => hanldeStartOrStopAuto(BallColor.Green)}>
                        <div className="button-inner">
                            <div>{ballColor === BallColor.Green ? "Stop Auto Bet" : "Bet Green"}</div>
                        </div>
                    </button>
                </div>
                <div className="ui-input bb6jcua bet-item">
                    <div className="input-label">
                        <div>Payout</div>
                        <div className="bet-payout">{ballConfig ? `${_.divide(ballConfig[2][2], 100)}x` : ""}</div>
                    </div>
                    <button
                        className={`ui-button button-normal s-gray bet-button type1000 ${ballColor === BallColor.Moon ? "is-active" : ""}`}
                        disabled={isAuto && ballColor !== BallColor.Moon}
                        onClick={() => hanldeStartOrStopAuto(BallColor.Moon)}>
                        <div className="button-inner">
                            <div>{ballColor === BallColor.Moon ? "Stop Auto Bet" : "Bet Moon"}</div>
                        </div>
                    </button>
                </div>
            </div>
        );
    };

    // 自动模式操作视图
    const renderAutoView = () => {
        return (
            <div className="w5hbfsg auto-control">
                <div className={`ui-input small cu6byd0 c8960cw game-coininput ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">
                        <div className="l6njnd7 label">
                            <div>Amount</div>
                        </div>
                        <div className="label-amount">0 JPY</div>
                    </div>
                    <div className={`input-control ${focusAmount ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            onFocus={() => setFocusAmount(true)}
                            onBlur={() => setFocusAmount(false)}
                        />
                        <img alt="" className="coin-icon" src={jpy} />
                        <div className="button-group">
                            <button onClick={divideAmount}>/2</button>
                            <button onClick={multiplyAmount}>x2</button>
                            <button className="t11i7rl9">
                                <SvgIcon dataKey="icon_Arrow" />
                                <SvgIcon dataKey="icon_Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`ui-input small is-bold ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">Number of Bets</div>
                    <div className={`input-control ${focusAutoBetCount ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            value={autoBetCount}
                            onChange={(e) => setAutoBetCount(e.target.value)}
                            onFocus={() => setFocusAutoBetCount(true)}
                            onBlur={() => setFocusAutoBetCount(false)}
                        />
                        <div className="button-group">
                            <button onClick={() => setAutoBetCount("1")}>∞</button>
                            <button onClick={() => setAutoBetCount("10")}>10</button>
                            <button onClick={() => setAutoBetCount("100")}>100</button>
                        </div>
                    </div>
                </div>
                <div className={`ui-input small g130fyuq is-bold ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">On win</div>
                    <div className={`input-control ${focusAutoWin ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            readOnly={!openAutoOnWin}
                            value={autoIncreaseOnWin}
                            onChange={(e) => setAutoIncreaseOnWin(e.target.value)}
                            onFocus={() => {
                                if (openAutoOnWin) {
                                    setFocusAutoWin(true);
                                }
                            }}
                            onBlur={() => setFocusAutoWin(false)}
                        />
                        <div className={`i1qy81zi increase-switch ${openAutoOnWin ? "" : "is-enable"}`}>
                            <div className="dot-wrap" onClick={() => setOpenAutoOnWin(!openAutoOnWin)}>
                                <div className="dot"></div>
                            </div>
                            <div className="reset text">Reset</div>
                            <div className="increse text">Increase by</div>
                        </div>
                        <div className="percent">%</div>
                    </div>
                </div>
                <div className={`ui-input small g130fyuq is-bold ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">On lose</div>
                    <div className={`input-control ${focusAutoLose ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            readOnly={!openAutoOnLose}
                            value={autoIncreaseOnLose}
                            onChange={(e) => setAutoIncreaseOnLose(e.target.value)}
                            onFocus={() => {
                                if (openAutoOnLose) {
                                    setFocusAutoLose(true);
                                }
                            }}
                            onBlur={() => setFocusAutoLose(false)}
                        />
                        <div className={`i1qy81zi increase-switch ${openAutoOnLose ? "" : "is-enable"}`}>
                            <div className="dot-wrap" onClick={() => setOpenAutoOnLose(!openAutoOnLose)}>
                                <div className="dot"></div>
                            </div>
                            <div className="reset text">Reset</div>
                            <div className="increse text">Increase by</div>
                        </div>
                        <div className="percent">%</div>
                    </div>
                </div>
                <div className={`ui-input small cu6byd0 is-bold ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">
                        Stop on win
                        {/* <div className="label-amount">0 USD</div> */}
                    </div>
                    <div className={`input-control ${focusStopWin ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            value={stopOnWin}
                            onChange={(e) => setStopOnWin(e.target.value)}
                            onFocus={() => setFocusStopWin(true)}
                            onBlur={() => setFocusStopWin(false)}
                        />
                        <img alt="" className="coin-icon" src={jpy}></img>
                    </div>
                </div>
                <div className={`ui-input small cu6byd0 is-bold ${isAuto ? "is-disabled" : ""}`}>
                    <div className="input-label">
                        Stop on lose
                        {/* <div className="label-amount">0 USD</div> */}
                    </div>
                    <div className={`input-control ${focusStopLose ? "is-focus" : ""}`}>
                        <input
                            type="text"
                            value={stopOnLose}
                            onChange={(e) => setStopOnLose(e.target.value)}
                            onFocus={() => setFocusStopLose(true)}
                            onBlur={() => setFocusStopLose(false)}
                        />
                        <img alt="" className="coin-icon" src={jpy}></img>
                    </div>
                </div>
                {playType === "Classic" && (
                    <div className={`ui-input small cu6byd0 is-bold ${isAuto ? "is-disabled" : ""}`}>
                        <div className="input-label">
                            Auto cash out
                            {/* <div className="label-amount">0 USD</div> */}
                        </div>
                        <div className={`input-control ${focusCashout ? "is-focus" : ""}`}>
                            <input
                                type="text"
                                value={cashout}
                                onChange={(e) => setCashout(e.target.value)}
                                onFocus={() => setFocusCashout(true)}
                                onBlur={() => setFocusCashout(false)}
                            />
                            <img className="coin-icon" src={jpy}></img>
                        </div>
                    </div>
                )}
                {renderAutoButtons()}
            </div>
        );
    };

    // 游戏区域
    const renderGameMain = () => {
        return (
            <div className="game-main">
                {
                    <div id="crash-control-0" className="g15z12z game-control style1">
                        <div className={`ui-radio game-control-switch ${isAuto ? "is-disabled" : ""}`}>
                            <button
                                className={isAutoType ? "" : "is-active"}
                                onClick={() => {
                                    if (!isAuto) {
                                        setIsAutoType(false);
                                    }
                                }}>
                                <div className="label">Manual</div>
                            </button>
                            <button
                                className={isAutoType ? "is-active" : ""}
                                onClick={() => {
                                    if (!isAuto) {
                                        setIsAutoType(true);
                                    }
                                }}>
                                <div className="label">Auto</div>
                            </button>
                        </div>
                        <div className="game-control-panel">{isAutoType ? renderAutoView() : renderManualView()}</div>
                    </div>
                }

                <TrendsHistory
                    isMobileStatus={isMobileStatus}
                    trendsData={trendsData}
                    trendsOpen={trendsOpen}
                    darkModeStatus={darkModeStatus}
                    playType={playType}
                    setTrendsOpen={(open) => setTrendsOpen(open)}
                    setPlayType={(type) => setPlayType(type)}
                    ballConfig={ballConfig}
                />
                <div className="s1u0kx1y">
                    <div className="sjwpvfr">
                        <button className="ui-button button-normal item favorite">
                            <div className="button-inner">
                                <SvgIcon dataKey="icon_Favorites1" />
                                {!isMobileStatus && <span className="num">2021</span>}
                            </div>
                        </button>
                    </div>
                    <button className="action-item">
                        <SvgIcon dataKey="icon_LiveStats" />
                        <span className="title">Live Stats</span>
                    </button>
                    <button className="action-item">
                        <SvgIcon dataKey="icon_Help" />
                        <span className="title">Help</span>
                    </button>
                </div>
            </div>
        );
    };

    // 右侧游戏数据
    const renderAllBet = () => {
        return (
            <div className="all-bet">
                {!isMobileStatus && (
                    <div className="top">
                        <div className="title">All Bets</div>
                        <div className="flex-middle">
                            <div>Trenball</div>
                            <div className={`ui-switch ${tableIsTrenball ? "open" : ""}`} onClick={() => setTableIsTrenball(!tableIsTrenball)}>
                                <div className="dot"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="w1mk6de3 need-scroll">
                    <table className="head">
                        <tbody>
                            <tr>
                                <td className="user">Player</td>
                                <td className="escape">Cash Out</td>
                                <td className="amount">Amount</td>
                                <td>Profit</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={`scroll-wrap ${tableShowMore ? "ui-scrollview has-scroll" : ""}`}>
                        <table className="ui-table is-hover">
                            <tbody>
                                {tableData.map((item) => {
                                    return (
                                        <tr key={`${item}`}>
                                            <td className="user">
                                                <a href="/" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                    <img alt="" className="avatar " src="https://img2.bc.game/avatar/5000034/s" />
                                                    <div className="name">OG GROUP</div>
                                                </a>
                                            </td>
                                            <td className="escape">
                                                <span className="ttl opacity">Betting</span>
                                            </td>
                                            <td className="bet">
                                                <div className="cy2znlo coin notranslate">
                                                    <div className="amount">
                                                        <span className="amount-str">¥151,586.26</span>
                                                    </div>
                                                    <img alt="" className="coin-icon" src={jpy} />
                                                </div>
                                            </td>
                                            <td className="profit">
                                                <span className="ttl opacity">Betting</span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="foot">
                        <div className="state">309/424 Player</div>
                        <button className={`list-toggle ${tableShowMore ? "show-less" : "show-more"}`} onClick={() => setTableShowMore(!tableShowMore)}>
                            <div>{tableShowMore ? "Show less" : "Show more"}</div>
                            <SvgIcon dataKey="icon_Arrow" />
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={`gjenjb8 game-style1 c1kpo6zm ${isMobileStatus ? "is-mob" : "is-pc"}`} id="game-crash">
            {renderGameMain()}
            {renderAllBet()}
        </div>
    );
};

export default Crash;
