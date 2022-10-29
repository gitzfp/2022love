import casinoData from "../../data/casino.json";
import {useEffect, useState} from "react";
import casino_img from "../../assets/banner_mobile.png";
import apiCasino from "api/casinoApi";

interface useGameListProps {
    page: number;
    pageSize: number;
    type: string;
    keyword?: string;
    isLoadMore?: boolean;
}

const useGameData = (props: useGameListProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const mockData: any = casinoData.data.pageList;
    const [gameData, setGameDta]: any = useState(mockData);
    const imgs = [
        "/static_images/229880b5-7250-47ce-a0ac-9663745e8444.png",
        "/static_images/229880b5-7250-47ce-a0ac-9663745e8444.png",
        "/static_images/229880b5-7250-47ce-a0ac-9663745e8444.png",
        "/static_images/229880b5-7250-47ce-a0ac-9663745e8444.png",
        // "https://th.bing.com/th?q=Kelowna+BC&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=2&pid=InlineBlock&mkt=en-US&cc=US&setlang=en&adlt=strict&t=1&mw=247",
        // "https://th.bing.com/th/id/OIP.31SiMEJEtkkUJhc3aeBo4QAAAA?w=123&h=150&c=7&r=0&o=5&dpr=2&pid=1.7",
        // "https://th.bing.com/th/id/OIP._eDVo_b_fjPCJWq0wZlymgAAAA?w=148&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
    ];

    const getDataFromServer = async (page: number, casinotype: string) => {
        let type = 1;
        if (casinotype === "Slots") {
            type = 2;
        } else if (casinotype === "Picks For You") {
            type = 5;
        } else if (casinotype === "BC Originals") {
            type = 1;
        } else if (casinotype === "Live Casino") {
            type = 3;
        }
        console.log(page, "====网络请求", type);
        setIsLoading(true);
        // const response: any = await apiCasino.getGameList(page, 40, type, 2);
        // if (response.data.code !== 0 || !response.data?.data?.gameList) return;
        const newData: any = gameData; //response.data?.data;
        console.log(newData, "====网络数据", type);
        setTimeout(() => {
            if (props.isLoadMore) {
                newData.gameList = [...gameData.gameList, ...mockData.gameList];
            }
            newData.gameList.forEach((item: any, idx: number) => {
                item.logoUrl = imgs[idx % 4];
            });
            setGameDta(newData);
            setIsLoading(false);
        }, 3000);
    };

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setGameDta({gameList: []});
            setIsLoading(false);
        }, 3000);
    }, [props.keyword]);

    useEffect(() => {
        getDataFromServer(props.page, props.type);
    }, [props.type, props.page]);

    return {
        gameData,
        isLoading,
    };
};

export default useGameData;
