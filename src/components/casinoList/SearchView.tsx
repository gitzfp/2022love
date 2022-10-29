import SvgIcon from "components/SvgIcon";
import NoResult from "./assets/noresult.png";
import {useEffect, useState} from "react";
import useGameData from "components/gameList/useGameData";
import {useDebounce} from "react-use";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useAppSelector} from "app/hooks";
import {isMobile} from "features/setting/settingSlice";
import GameItem from "components/gameList/GameItem";

interface SearchProps {
    onCancle: () => void;
    gameList: any;
}

const SearchView = (props: SearchProps) => {
    const [keyword, setKeyWord] = useState("");
    const {gameData, isLoading} = useGameData({page: 1, pageSize: 40, type: "", keyword: keyword});
    const {gameList} = gameData;
    const [hisData, setHisData]: any[] = useState([]);
    const statusIsMobile = useAppSelector(isMobile);
    const preViewNumber = statusIsMobile ? 2 : 6;
    useDebounce(
        () => {
            if (!keyword) return;
            const locData = localStorage.getItem("hisData");
            let newData = [];
            if (locData) {
                newData = [...JSON.parse(locData), keyword];
            } else {
                newData = [keyword];
            }
            saveHisData(newData);
        },
        1000,
        [keyword],
    );
    useEffect(() => {
        getHisData();
    }, []);

    const saveHisData = (hisData: any) => {
        localStorage.setItem("hisData", JSON.stringify(hisData));
    };

    const getHisData = () => {
        const locData = localStorage.getItem("hisData");
        if (locData) {
            setHisData(JSON.parse(locData));
        }
    };

    const renderSearchResult = () => {
        return (
            <div className="search-result">
                {!keyword && <p className="require-auto">Search requires at least 3 characters</p>}
                {isLoading && keyword && (
                    <div className="e1a15m3u loading">
                        <svg viewBox="0 0 84 24" fill="#3BC117">
                            <circle cx="18" cy="12" r="6"></circle>
                            <circle cx="18" cy="12" r="6"></circle>
                            <circle cx="42" cy="12" r="6"></circle>
                            <circle cx="66" cy="12" r="6"></circle>
                        </svg>
                    </div>
                )}
                <div className="h1hx13uy">
                    {keyword && !isLoading && (
                        <div className="search-result-info">
                            <div className="empty sp23xgg ">
                                <img src={NoResult} alt="" />
                                <div className="msg">
                                    <p className="require-wrod">No results</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div
                        className="history-top"
                        onClick={() => {
                            setHisData([]);
                            saveHisData([]);
                        }}>
                        <p>Search history</p>
                        <SvgIcon dataKey="icon_Delete" />
                    </div>
                    <div className="history-list-wrap">
                        {hisData.map((item: string, idx: number) => {
                            return (
                                <div key={idx} className="huukpid">
                                    <p>{item}</p>
                                    <button
                                        onClick={() => {
                                            hisData.splice(idx, 1);
                                            setHisData([...hisData]);
                                            if (hisData.length > 0) saveHisData(hisData);
                                        }}>
                                        <SvgIcon dataKey="icon_Close" />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    const renderRecomentView = () => {
        return (
            <div className="ggjjku9 s1kcy63f related-games">
                <div className="grid-tit">
                    <span className="txt">Recommended for you</span>
                </div>
                <div className="grid-nav">
                    <a href="/gamelist/game-related?gameUnique=crash" keep-scroll-position="true" className="num">
                        <span>All 20</span>
                    </a>
                    <button className="ui-button button-normal slide-btn prev">
                        <div className="button-inner">
                            <SvgIcon dataKey="icon_Arrow" />
                        </div>
                    </button>
                    <button className="ui-button button-normal slide-btn next">
                        <div className="button-inner">
                            <SvgIcon dataKey="icon_Arrow" />
                        </div>
                    </button>
                </div>

                <Swiper
                    slidesPerView={preViewNumber}
                    spaceBetween={12}
                    slidesPerGroup={preViewNumber}
                    className="s7wwip5 grid-list"
                    navigation={{nextEl: ".slide-btn.next", prevEl: ".slide-btn.prev"}}
                    modules={[Navigation]}>
                    {props.gameList?.map((x: any, index: number) => (
                        <SwiperSlide key={`${index}`}>
                            <GameItem item={x} key={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    };

    return (
        <div
            className={"a16k0rgg anim-search-enter"}
            style={{top: 0, zIndex: 800, overflow: "hidden"}}
            onTouchMove={(e) => {
                console.log("====touch move");
                e.preventDefault();
            }}>
            <div className="anim-inner-wrap">
                <div onClick={() => props.onCancle()} className="bg"></div>
                <div className="search-anim-enter" style={{transform: "translate3d(0px, 0px, 0px)"}}>
                    <div className="p1xbdpa5 page-max-width-wrap page-search">
                        <div className="sk70aa2 search-input-wrap inner-search-input focus">
                            <div className="input-before">
                                <SvgIcon dataKey="icon_Search" />
                            </div>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Game name | Provider"
                                onChange={(e) => {
                                    setKeyWord(e.target.value);
                                }}
                            />
                            <div className="input-after t" onClick={() => props.onCancle()}>
                                <p>Cancel</p>
                            </div>
                        </div>
                        {renderSearchResult()}
                        {/* {<CasinoList gameList={props.gameList} name={"Recommended for you"} />} */}
                        {renderRecomentView()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchView;
