import {MoneyType} from "./constants";

export interface UserInfo {
    // token
    token: string;
    // 当前的货币类型
    userMoneyType: MoneyType;
    //昵称
    nick: string;
    // 头像地址
    header: string;
    // 登记
    level: number;
    //  经验
    exp: number;
    // 手机号
    mobile: string;
    // 邮箱
    email: string;
    // 谷歌认证状态 0未认证 1已认证
    googleAutoCryptoState: number;
    // 邀请码
    inviteCode: number;
}

export interface GameInfo {
    // 游戏id
    gameId: number;
    // 游戏名称
    gameName: string;
    // 品牌方id
    providerId: number;
    //品牌方名称
    providerName: string;
    // 左侧菜单显示的小icon
    iconUrl: string;
    // 游戏页面 下方游戏信息logo
    logoUrl: string;
    // 上线时间
    releaseTime: string;
    // rtp值 (rtp可以理解为赢率)
    rtp: string;
    // 最大赢钱数（美金）
    maxWin: string;
    // 是否支持移动端 (0 不支持 1支持)
    isMobile: number;
    //游戏分类：0-未定义游戏类型，1-Slots，2-Live Casino
    type: number;
    //最小赌注范围
    minStakes: string;
    //最大赌注范围
    maxStakes: string;
    // 游戏介绍
    gameDesc: string;
    // 游戏iframe链接地址
    linkUrl: string;
}
