import {GameList} from "components";
import LoadMore from "components/gameList/LoadMore";
import useGameData from "components/gameList/useGameData";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {useSearchParam} from "react-use";
import SvgIcon from "../components/SvgIcon";
import CasinoBanner from "../components/casinoList/banner";
import {isDarkMode} from "features/setting/settingSlice";
import {useAppSelector} from "app/hooks";
import Styles from "../components/casinoList/casinoList.module.scss";
import SearchView from "components/casinoList/SearchView";
import CasinoList from "components/casinoList";

const Casino = (props: any) => {
    const pageSize = 20;
    let {type} = useParams();
    if (!type) {
        type = props.type;
    }
    const tab = useSearchParam("tab") || "brand";
    const [curTab, setCurTab] = useState(tab);
    const searchPage = useSearchParam("page") || "1";
    const [isLoadMore, setLoadMore] = useState(false);
    const [currPage, setCurrPage] = useState(parseInt(searchPage));
    const {gameData, isLoading} = useGameData({page: currPage, pageSize, type: type + "", isLoadMore}) as any;
    const {gameList} = gameData;

    const darkModeStatus = useAppSelector(isDarkMode);
    const [showSearchView, setShowSearchView] = useState(false);

    const renderSearch = () => {
        return (
            <div
                className="sunv7zz page-search-enter search-in-slots"
                onClick={() => {
                    const bodyStyle = document.body.style;
                    bodyStyle.overflow = "hidden";
                    setShowSearchView(true);
                }}>
                <div className="page-search-btn">
                    <div className="icon-wrap">
                        <SvgIcon dataKey="icon_Search" />
                    </div>
                    <p className="p">Game name | Provider</p>
                </div>
            </div>
        );
    };

    const getTitle = (name: string) => {
        let names = name.split("-");
        let title = "";
        if (name === "hot") {
            return "Hot Games";
        }
        for (let n of names) {
            title += n[0].toUpperCase() + n.substring(1) + " ";
        }
        return title;
    };

    const renderTitle = () => {
        return (
            <div className="n60mjr9 game-nav-path">
                <a keep-scroll-position={"true"} className="path active" title="Picks For You" href="void">
                    {getTitle(type + "")}
                </a>
            </div>
        );
    };

    const renderCasinoTitle = () => {
        return (
            <div className="s1ys4jpg">
                <div
                    onClick={() => {
                        setCurTab("all");
                        window.history.replaceState(null, "", window.location.href.split("?")[0] + "?tab=all");
                    }}
                    keep-scroll-position="true"
                    className={`nav-item is-active ${curTab === "all" ? "active" : ""}`}>
                    All
                </div>
                <div
                    onClick={() => {
                        setCurTab("brand");
                        window.history.replaceState(null, "", window.location.href.split("?")[0] + "?tab=brand");
                    }}
                    keep-scroll-position="true"
                    className={`nav-item ${curTab === "brand" ? "active" : ""}`}>
                    BC Originals
                </div>
                <div
                    onClick={() => {
                        setCurTab("slots");
                        window.history.replaceState(null, "", window.location.href.split("?")[0] + "?tab=slots");
                    }}
                    keep-scroll-position="true"
                    className={`nav-item ${curTab === "slots" ? "active" : ""}`}>
                    Slots
                </div>
                <div
                    onClick={() => {
                        setCurTab("live");
                        window.history.replaceState(null, "", window.location.href.split("?")[0] + "?tab=live");
                    }}
                    keep-scroll-position="true"
                    className={`nav-item ${curTab === "live" ? "active" : ""}`}>
                    Live Casino
                </div>
            </div>
        );
    };

    const renderProgress = () => {
        return (
            <div className="l1uymzjv load-more-wrap">
                <span className="current">{gameList?.length}</span>&nbsp; / &nbsp;
                <span className="total">{gameData.totalCount}</span>
                <div className="progress">
                    <div className="green" style={{width: "7%"}}></div>
                </div>
                {`${parseFloat(((gameList?.length / gameData.totalCount) * 100).toFixed(2)) * 1}%`}
            </div>
        );
    };

    const renderGameList = () => {
        return (
            <div className="s1ikydyo">
                {gameList?.length > 0 && <GameList gameList={gameList} />}
                {gameList?.length > 0 && renderProgress()}
                {gameList?.length > 0 && (
                    <LoadMore
                        noMore={gameList?.length >= gameData.total}
                        disabled={isLoading}
                        setLoadMore={() => {
                            setLoadMore(true);
                            setCurrPage(currPage + 1);
                        }}
                    />
                )}
            </div>
        );
    };

    const renderCasinoList = () => {
        return (
            <div>
                {["BC Original", "Slots", "Live Casino"].map((item, idx) => {
                    return <CasinoList key={idx} name={item} gameList={gameList} />;
                })}
            </div>
        );
    };

    const renderCisinoView = () => {
        return (
            <div className={`${Styles.root} sda20du`} style={{overflow: "hidden"}}>
                {showSearchView && (
                    <SearchView
                        gameList={gameList}
                        onCancle={() => {
                            setShowSearchView(false);
                            const bodyStyle = document.body.style;
                            bodyStyle.overflow = "auto";
                        }}
                    />
                )}
                ;
                <div className={`${darkModeStatus ? "darken" : ""} s1r31mst`}>
                    <div className={"ssqr6o3"}>
                        <div className="page-max-width-wrap">
                            <CasinoBanner />
                            {renderSearch()}
                        </div>
                    </div>
                    <div className="page-max-width-wrap casino-container">
                        {renderCasinoTitle()}
                        {isLoading && gameList?.length === 0 && (
                            <div className="e1a15m3u loading">
                                <svg viewBox="0 0 84 24" fill="#3BC117">
                                    <circle cx="18" cy="12" r="6"></circle>
                                    <circle cx="18" cy="12" r="6"></circle>
                                    <circle cx="42" cy="12" r="6"></circle>
                                    <circle cx="66" cy="12" r="6"></circle>
                                </svg>
                            </div>
                        )}
                        {curTab !== "all" && renderGameList()}
                        {curTab === "all" && renderCasinoList()}
                    </div>
                </div>
            </div>
        );
    };

    if (type === "casino") {
        return renderCisinoView();
    }

    return (
        <div className={"sda20du"}>
            {showSearchView && (
                <SearchView
                    gameList={gameList}
                    onCancle={() => {
                        setShowSearchView(false);
                        const bodyStyle = document.body.style;
                        bodyStyle.overflow = "auto";
                    }}
                />
            )}
            ;<div className="page-max-width-wrap">{renderSearch()}</div>
            <div className="slots-container page-max-width-wrap">
                {renderTitle()}
                {isLoading && gameList?.length === 0 && (
                    <div className="e1a15m3u loading">
                        <svg viewBox="0 0 84 24" fill="#3BC117">
                            <circle cx="18" cy="12" r="6"></circle>
                            <circle cx="18" cy="12" r="6"></circle>
                            <circle cx="42" cy="12" r="6"></circle>
                            <circle cx="66" cy="12" r="6"></circle>
                        </svg>
                    </div>
                )}
                {renderGameList()}
            </div>
        </div>
    );
};

export default Casino;
