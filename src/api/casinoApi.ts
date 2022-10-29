import client from "./client";

//请求类型 type：
//1-请求游戏类型对应的游戏，params为游戏类型，多个游戏类型用英文逗号分隔
//2-请求游戏厂商名下的游戏，params为游戏厂商ID，多个游戏厂商用英文逗号分隔
//3-按游戏名称搜索游戏，params为游戏名称
//4-按游戏tag搜索游戏，param为tagId,多个id中间用英文逗号分隔，目tagId：1-iBox Originals，2-slots，3-Live Casino，4-High Volatility，5-Feature Buy-in，6-Table Games，7-BlackJack，8-Roulette，9-Baccarat
//5-请求hot游戏，params为空字符串
//6-请求new游戏，params为空字符串
//7-请求recommend游戏，params为空字符串

const getGameList = (page: number, pageSize: number, type: number, params: string) =>
    client.post("/getGameList", {
        pageId: page, //分页ID，0-不分页，>0第几页
        pageCount: pageSize,
        type,
        params,
    });

// 获取自研游戏列表
const getOriginalGameList = () =>
    client.post("/getGameList", {
        pageId: 0,
        pageCount: 0, //pageId > 0时有效
        type: 4,
        params: "1",
    });

const apiCasino = {
    getGameList,
    getOriginalGameList,
};

export default apiCasino;
