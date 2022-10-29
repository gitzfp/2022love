import BotInfo from "components/gameList/BotInfo";
import SvgIcon from "components/SvgIcon";
import React from "react";
import {useEffect, useState} from "react";
import {useWindowSize, useScroll} from "react-use";

interface CasinoListProps {
    gameList: any;
    name: string;
}

const CasinoList = ({name, gameList}: CasinoListProps) => {
    const {width} = useWindowSize();
    const [columns, setColumns] = useState(4);
    const scrollRef: any = React.useRef(null);
    const {x} = useScroll(scrollRef);

    useEffect(() => {
        if (width < 661) {
            setColumns(2);
        } else if (width < 820) {
            setColumns(3);
        } else if (width < 992) {
            setColumns(4);
        } else if (width < 1164) {
            setColumns(5);
        } else if (width < 1292) {
            setColumns(6);
        } else {
            setColumns(7);
        }
    }, [width]);

    const renderNavView = () => {
        return (
            <div className="grid-nav">
                <a href="/gamelist/brand" keep-scroll-position="true" className="num">
                    <span>All 25</span>
                </a>
                <button
                    className="ui-button button-normal slide-btn prev"
                    disabled={x === 0}
                    onClick={() => {
                        if (x < scrollRef.current?.clientWidth) {
                            scrollRef.current.scrollTo(0, 0);
                        } else {
                            scrollRef.current.scrollTo(x - scrollRef.current?.clientWidth, 0);
                        }
                    }}>
                    <div className="button-inner">
                        <SvgIcon dataKey="icon_Arrow" />
                    </div>
                </button>
                <button
                    className="ui-button button-normal slide-btn next"
                    disabled={x + scrollRef.current?.clientWidth === scrollRef.current?.scrollWidth}
                    onClick={() => {
                        scrollRef.current.scrollTo(x + scrollRef.current?.clientWidth, 0);
                    }}>
                    <div className="button-inner">
                        <SvgIcon dataKey="icon_Arrow" />
                    </div>
                </button>
            </div>
        );
    };

    return (
        <div className={`ggjjku9 s1kcy63f ${gameList.length > 4 ? "tow-rows" : ""}`}>
            <div className="grid-tit">
                <span className="txt">{name}</span>
            </div>
            {renderNavView()}
            <div
                ref={scrollRef}
                className="s7wwip5 grid-list"
                style={{gridAutoColumns: (!scrollRef.current ? width : scrollRef.current?.clientWidth) / columns - ((columns - 1) * 12) / columns}}>
                {gameList?.map((item: any, idx: number) => {
                    return (
                        <div key={name + idx} className="sfistqe grid-item">
                            <a href="/game/crash" keep-scroll-position="true" className="game-img-wrap">
                                <div className="lazy-img game-img">
                                    <img src={item.logoUrl} alt="" />
                                </div>
                            </a>
                            <BotInfo item={item} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CasinoList;
