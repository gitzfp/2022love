import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {useAppSelector} from "app/hooks";
import {GameShow, SvgIcon} from "components";
import {isDarkMode, isMobile} from "features/setting/settingSlice";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

import emptyLight from "../themes/202210/assets/empty_w.3d223ee8.png";
import emptyDark from "../themes/202210/assets/empty.662eab51.png";
import trophy from "../themes/202210/assets/trophy.424f8523.png";
import winner from "../themes/202210/assets/winner.f10299da.png";
import noAvatar from "../themes/202210/assets/avatar.3730afd4.png";
import gold from "../themes/202210/assets/gold.92faf9c1.svg";
import silver from "../themes/202210/assets/gold.92faf9c1.svg";
import copper from "../themes/202210/assets/copper.39898678.svg";

const Game = () => {
    const {id} = useParams();
    const [showMore, setShowMore] = useState(false);
    const statusIsMobile = useAppSelector(isMobile);
    const statusDarkMode = useAppSelector(isDarkMode);
    const preViewNumber = statusIsMobile ? 2 : 6;
    const [tabName, setTabName] = useState("tab1");

    const renderGameInfo = () => {
        if (statusIsMobile) {
            return (
                <div className="m1naez7c">
                    <div className="about-wrap">
                        <div className="tit">About this game</div>
                        <div className="about-detail">
                            The Crash is a multiplayer game where you can choose between Classic and Trenball modes. In classic mode, you are allowed to cash
                            the money after betting. The amount you can earn will depend on how many players are betting on the round. For the Trenball mode,
                            you will be required to bet on a line color which can be a factor in your winning.
                        </div>
                    </div>
                    <div
                        className="v1le0s9l"
                        style={{
                            transition: "all 300ms ease-out",
                            height: showMore ? "375px" : "0px",
                        }}>
                        <div className="props-info s1mhd57s">
                            <div className="tit">Game Info</div>
                            <div className="info-list">
                                <div className="info-item" style={{order: 2}}>
                                    <div className="label">Provider</div>
                                    <div className="val">BC Originals</div>
                                </div>
                                <div className="info-item" style={{order: 8}}>
                                    <div className="label">Mobile</div>
                                    <div className="val">Yes</div>
                                </div>
                                <div className="info-item" style={{order: 11}}>
                                    <div className="label">Stakes Range</div>
                                    <div className="val color_2">$0.01 to $100000</div>
                                </div>
                                <div className="info-item" style={{order: 3}}>
                                    <div className="label">Max Win</div>
                                    <div className="val color_2">100000</div>
                                </div>
                                <div className="info-item" style={{order: 4}}>
                                    <div className="label">Type</div>
                                    <div className="val">BC Provably fairs</div>
                                </div>
                                <div className="info-item" style={{order: 1}}>
                                    <div className="label">RTP (Return to Player)</div>
                                    <div className="val color_2">99%</div>
                                </div>
                            </div>
                        </div>
                        <div className="tag-wrap stmtvyc">
                            <div className="tit">Features Tags</div>
                            <div className="tag-list">
                                <a href="/tagname/crash casino" keep-scroll-position="true" className="tag-item">
                                    crash casino
                                </a>
                                <a href="/tagname/crash at bc game" keep-scroll-position="true" className="tag-item">
                                    crash at bc game
                                </a>
                                <a href="/tagname/crash casino game" keep-scroll-position="true" className="tag-item">
                                    crash casino game
                                </a>
                                <a href="/tagname/trenball" keep-scroll-position="true" className="tag-item">
                                    trenball
                                </a>
                                <a href="/tagname/classic crash" keep-scroll-position="true" className="tag-item">
                                    classic crash
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="btns">
                        <div className={`cl-primary show-btn ${showMore && "more"}`} onClick={() => setShowMore((open) => !open)}>
                            Show {showMore ? "less" : "more"} <SvgIcon dataKey="icon_Arrow" />
                        </div>
                        {/* <a href="/game/crash/detail" keep-scroll-position="true" className="info-btn">
                            More Info
                        </a> */}
                    </div>
                </div>
            );
        }

        return (
            <div className="s6a207h">
                <div className="game-info">
                    <img className="game-banner" src="/static_images/47c0b2af-8c87-463d-baaf-d04d22ce66e3.png" alt="" />
                    <div className="desc">
                        <div className="name">Crash</div>
                        <div className="relate">
                            <div className="provider">
                                By{" "}
                                <a href="/provider/BC Originals" keep-scroll-position="true">
                                    BC Originals
                                </a>
                            </div>
                        </div>
                        <div className="release">Release:2022/8/26</div>
                    </div>
                    {/* <a href="#" keep-scroll-position="true" className="info-btn">
                More Info
            </a> */}
                </div>

                <div
                    className="v1le0s9l"
                    style={{
                        transition: "all 300ms ease-out",
                        height: showMore ? "372px" : "0px",
                    }}>
                    <div className="s1t5ushy">
                        <div className="left-cont">
                            <div className="props-info s1mhd57s">
                                <div className="tit">Game Info</div>
                                <div className="info-list">
                                    <div className="info-item" style={{order: 2}}>
                                        <div className="label">Provider</div>
                                        <div className="val">BC Originals</div>
                                    </div>
                                    <div className="info-item" style={{order: 8}}>
                                        <div className="label">Mobile</div>
                                        <div className="val">Yes</div>
                                    </div>
                                    <div className="info-item" style={{order: 11}}>
                                        <div className="label">Stakes Range</div>
                                        <div className="val color_2">$0.01 to $100000</div>
                                    </div>
                                    <div className="info-item" style={{order: 3}}>
                                        <div className="label">Max Win</div>
                                        <div className="val color_2">100000</div>
                                    </div>
                                    <div className="info-item" style={{order: 4}}>
                                        <div className="label">Type</div>
                                        <div className="val">BC Provably fairs</div>
                                    </div>
                                    <div className="info-item" style={{order: 1}}>
                                        <div className="label">RTP (Return to Player)</div>
                                        <div className="val color_2">99%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-cont">
                            <div className="tag-wrap stmtvyc">
                                <div className="tit">Features Tags</div>
                                <div className="tag-list">
                                    <a href="/tagname/crash casino" keep-scroll-position="true" className="tag-item">
                                        crash casino
                                    </a>
                                    <a href="/tagname/crash at bc game" keep-scroll-position="true" className="tag-item">
                                        crash at bc game
                                    </a>
                                    <a href="/tagname/crash casino game" keep-scroll-position="true" className="tag-item">
                                        crash casino game
                                    </a>
                                    <a href="/tagname/trenball" keep-scroll-position="true" className="tag-item">
                                        trenball
                                    </a>
                                    <a href="/tagname/classic crash" keep-scroll-position="true" className="tag-item">
                                        classic crash
                                    </a>
                                </div>
                            </div>
                            <div className="about-wrap">
                                <div className="tit">About this game</div>
                                <div className="about-detail">
                                    The Crash is a multiplayer game where you can choose between Classic and Trenball modes. In classic mode, you are allowed to
                                    cash the money after betting. The amount you can earn will depend on how many players are betting on the round. For the
                                    Trenball mode, you will be required to bet on a line color which can be a factor in your winning.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className={`cl-primary show-btn ${showMore && "more"}`} onClick={() => setShowMore((open) => !open)}>
                        Show {showMore ? "less" : "more"} <SvgIcon dataKey="icon_Arrow" />
                    </div>
                    {/* <div className="comments">
                Comments
                <div className="ui-switch">
                    <div className="dot" />
                </div>
            </div> */}
                </div>
            </div>
        );
    };

    const renderRelatedGameItem = (
        path: string = '"/game/limbo"',
        brand: string = "BC Originals",
        brandPath: string = "/provider/BC Originals",
        imgUrl: string = "/static_images/229880b5-7250-47ce-a0ac-9663745e8444.png",
    ) => {
        return (
            <div className="sfistqe grid-item">
                <a href={path} keep-scroll-position="true" className="game-img-wrap">
                    <div className="lazy-img game-img">
                        <img src={imgUrl} alt="" />
                    </div>
                </a>
                <div className="bot-info">
                    <div className="game-tit">
                        <a href={brandPath} keep-scroll-position="true" className="txt">
                            {brand}
                        </a>
                        <div className="s1s823mz">
                            <button>
                                <SvgIcon dataKey="icon_Inform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const renderView = (name: string) => {
        switch (name) {
            case "tab2":
                return (
                    <div className="tabs-view" style={{transform: "none"}}>
                        <div className="s1z07brw">
                            <div className="h4j5hip">
                                <table className="ui-table is-hover">
                                    <thead>
                                        <tr>
                                            <th style={{width: "24%"}}>Game ID</th>
                                            <th style={{width: "20%"}}>Result</th>
                                            <th>Hash</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299178
                                                </div>
                                            </td>
                                            <td>1.83x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="fb2f1c902e237c0730f11ca25b625cecc094cc01563c0d1b4b43f2949103e108"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=fb2f1c902e237c0730f11ca25b625cecc094cc01563c0d1b4b43f2949103e108&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-2" />
                                                    5299177
                                                </div>
                                            </td>
                                            <td>2.29x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="1d316c8cb6173a923f6a3c2fdb9cfa317d75a0fefbf0f74dcf6b1d14a56bd02a"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=1d316c8cb6173a923f6a3c2fdb9cfa317d75a0fefbf0f74dcf6b1d14a56bd02a&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299176
                                                </div>
                                            </td>
                                            <td>1.51x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="e320aa5020d9ecc521590c8c55f831a227de41a77e64fcca6632e28cc6413700"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=e320aa5020d9ecc521590c8c55f831a227de41a77e64fcca6632e28cc6413700&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299175
                                                </div>
                                            </td>
                                            <td>1.98x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="1bd7b42c9c90a82162727e57e466a2d56ec5ff47f3435d4e8134a006ceebfd58"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=1bd7b42c9c90a82162727e57e466a2d56ec5ff47f3435d4e8134a006ceebfd58&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-2" />
                                                    5299174
                                                </div>
                                            </td>
                                            <td>7.05x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="fd668dc061260f625349f593bdc559f0047be7273f9e479683b59bbffd36c881"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=fd668dc061260f625349f593bdc559f0047be7273f9e479683b59bbffd36c881&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299173
                                                </div>
                                            </td>
                                            <td>1.66x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="2b597e71ea06f4a04398622babd54d64cc6d71c5f9940a1425c1d7d80cb3c275"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=2b597e71ea06f4a04398622babd54d64cc6d71c5f9940a1425c1d7d80cb3c275&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299172
                                                </div>
                                            </td>
                                            <td>1.32x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="03ff8160bde5445758a2b5ae5e0368ad6b326d92150eb415eddcaf9ff7577adb"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=03ff8160bde5445758a2b5ae5e0368ad6b326d92150eb415eddcaf9ff7577adb&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299171
                                                </div>
                                            </td>
                                            <td>1.59x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="0a6ae096b58135702031ba8ccd088a7567e537c1c20ce2a6cba55ea6c899a95c"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=0a6ae096b58135702031ba8ccd088a7567e537c1c20ce2a6cba55ea6c899a95c&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299170
                                                </div>
                                            </td>
                                            <td>1.8x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="1bae1ce6a97a6aed332982d27d45513e56f61b8b4b993330ba56c49a3791ace1"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=1bae1ce6a97a6aed332982d27d45513e56f61b8b4b993330ba56c49a3791ace1&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299169
                                                </div>
                                            </td>
                                            <td>1.23x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="2c194c63a7670ebf1af20ce9691b4981b075c6ce158afdc87b91467018073d71"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=2c194c63a7670ebf1af20ce9691b4981b075c6ce158afdc87b91467018073d71&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299168
                                                </div>
                                            </td>
                                            <td>1.43x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="ff363b8028b0e7496f90ca3dcfd0bc44510a81517affdf1a5460a7d2101ff0d9"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=ff363b8028b0e7496f90ca3dcfd0bc44510a81517affdf1a5460a7d2101ff0d9&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299167
                                                </div>
                                            </td>
                                            <td>1.1x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="67af1b0bfd820bd311d749e65b48502fe083660de7766f32acc9762ce4f06b12"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=67af1b0bfd820bd311d749e65b48502fe083660de7766f32acc9762ce4f06b12&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-2" />
                                                    5299166
                                                </div>
                                            </td>
                                            <td>4.61x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="72d52f8c120e5db7260b66570c593a963e81ad549f2b4064841646d3e56ea178"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=72d52f8c120e5db7260b66570c593a963e81ad549f2b4064841646d3e56ea178&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299165
                                                </div>
                                            </td>
                                            <td>1.93x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="f1ccb2a02bb8dc5bb52abe0251d701daf7743f212580b93695a63a44bab00e85"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=f1ccb2a02bb8dc5bb52abe0251d701daf7743f212580b93695a63a44bab00e85&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299164
                                                </div>
                                            </td>
                                            <td>1.26x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="19a59b92a262e490c198f4603d4b4c20cd59a455b8469b3b07d4528926fdc449"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=19a59b92a262e490c198f4603d4b4c20cd59a455b8469b3b07d4528926fdc449&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299163
                                                </div>
                                            </td>
                                            <td>1.09x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="240e595f78cd52027a00c053f3a8754346e42acb40b79e6c5e5fe56d9457a675"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=240e595f78cd52027a00c053f3a8754346e42acb40b79e6c5e5fe56d9457a675&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-2" />
                                                    5299162
                                                </div>
                                            </td>
                                            <td>4.23x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="18586436feaefeadb0d8ee23446b9ec18fcfc1582939dc6135cb04263edec754"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=18586436feaefeadb0d8ee23446b9ec18fcfc1582939dc6135cb04263edec754&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299161
                                                </div>
                                            </td>
                                            <td>1x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="3f309ce811b67babe634bd93df2a90652ed6d53ba705717e3185974772a86e24"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=3f309ce811b67babe634bd93df2a90652ed6d53ba705717e3185974772a86e24&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-2" />
                                                    5299160
                                                </div>
                                            </td>
                                            <td>3.16x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="92dbdda66871dc8f162e99357323dd7dc32267097b2a183532c362003aea9d90"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=92dbdda66871dc8f162e99357323dd7dc32267097b2a183532c362003aea9d90&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="game-link">
                                                    <div className="dot type-1" />
                                                    5299159
                                                </div>
                                            </td>
                                            <td>1.17x</td>
                                            <td>
                                                <div className="flex-center">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        defaultValue="f08132885cc50564b04b67551150fe39d339ce3b968f8e9717ba08bf0af8136d"
                                                    />
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href="https://bcgame-project.github.io/verify/crash.html?hash=f08132885cc50564b04b67551150fe39d339ce3b968f8e9717ba08bf0af8136d&v=">
                                                        Verify
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="ui-pagination">
                                    <div className="total">Total 100</div>
                                    <div className="pages-box pages-wrap">
                                        <button className="active" disabled>
                                            1
                                        </button>
                                        <button>2</button>
                                        <button>3</button>
                                    </div>
                                    <div className="pages-box page-pn pageConic">
                                        <button disabled className="disabled previous-btn">
                                            <SvgIcon dataKey="icon_Arrow" />
                                        </button>
                                        <button className="next-page">
                                            <SvgIcon dataKey="icon_Arrow" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "tab3":
                return (
                    <div className="tabs-view" style={{transform: "none"}}>
                        <div className="s1eyfyyx">
                            <table className="ui-table is-hover">
                                <thead>
                                    <tr>
                                        <th>Game</th>
                                        <th>Player</th>
                                        <th>Bet Amount</th>
                                        <th>Multiplier</th>
                                        <th className="m-width">Profit Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Classic Dice</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/345773" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Kezdog87</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">402.100118</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>10.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">+3618.90106</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Live - ONE Blackjack</div>
                                        </td>
                                        <td>
                                            <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">
                                                    <span className="hidden-name">
                                                        <svg className="s1yetyrx icon">
                                                            <use xlinkHref="/assets/symbol-defs.da0dce54.svg#icon_Hidden" />
                                                        </svg>
                                                        Hidden
                                                    </span>
                                                </div>
                                            </span>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        1000.<span className="suffix">00000</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>0.00x</td>
                                        <td className="profitline lose">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        1000.<span className="suffix">00000</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Tombstone R.I.P.</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/5650554" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">채닥이</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        0.5<span className="suffix">0000000</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>422.40x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        +210.7<span className="suffix">00000</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Classic Dice</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/345773" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Kezdog87</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">402.100118</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>10.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">+3618.90106</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Classic Dice</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/345773" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Kezdog87</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">402.100118</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>10.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">+3618.90106</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Wild West Gold</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/5469031" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Adiuiailiwb</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">0.09346556</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>0.27x</td>
                                        <td className="profitline lose">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">0.06786534</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Classic Dice</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/345773" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Kezdog87</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">402.100118</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>10.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">+3618.90106</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Classic Dice</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/345773" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Kezdog87</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">402.100118</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>10.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">+3618.90106</span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Crash</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/1593902" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Sarducar</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        3355.4432<span className="suffix">0</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>2.00x</td>
                                        <td className="profitline win">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        +3355.4432<span className="suffix">0</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="game-name">
                                            <img src="/static_images/Slots.45002560.png" className="game-icon" alt="" />
                                            <div className="name">Crash</div>
                                        </td>
                                        <td>
                                            <a href="#/user/profile/1593902" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                <div className="name">Sarducar</div>
                                            </a>
                                        </td>
                                        <td>
                                            <div className="cy2znlo coin notranslate">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        3355.4432<span className="suffix">0</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                        <td>0.00x</td>
                                        <td className="profitline lose">
                                            <div className="cy2znlo coin notranslate has-sign">
                                                <div className="amount">
                                                    <span className="amount-str">
                                                        3355.4432<span className="suffix">0</span>
                                                    </span>
                                                </div>
                                                <img className="coin-icon" alt="" src="/static_images/BTC.black.png" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="more">
                                <button className="more-cont">
                                    Show more{" "}
                                    <svg className="s1yetyrx icon" style={{transform: "rotate(90deg)"}}>
                                        <use xlinkHref="/assets/symbol-defs.da0dce54.svg#icon_Arrow" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                );

            case "tab4":
                return (
                    <div className="tabs-view" style={{transform: "none"}}>
                        <div id="contest" className="c7n3rq0 space-area">
                            <svg className="s1yetyrx icon contest__rules">
                                <use xlinkHref="/assets/symbol-defs.388ad9cc.svg#icon_Help" />
                            </svg>
                            <div style={{opacity: 1, transform: "none"}}>
                                <div className="c12m60t">
                                    <div className="contest__top radius">
                                        <div className="p1dl29hg">
                                            <div className="trophy">
                                                <img alt="" src={trophy} />
                                            </div>
                                            <div>
                                                <div className="type ttc">daily</div>
                                                <div className="title">Contest prize pool</div>
                                                <div className="prize-amount">
                                                    <span>$7,485.55</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="n1qt1k6m">
                                            <div className="text" style={{maxWidth: "250px"}}>
                                                Who's the invincible champion at the high table? Let's see what a badass you can be!
                                            </div>
                                            <button className="ui-button button-normal s-conic breathe">
                                                <div className="button-inner">Participate Now</div>
                                            </button>
                                        </div>
                                        <div className="c1iafga1">
                                            <img className="img-winner" src={winner} alt="" />
                                            <div className="champion-layout">
                                                <a href="#/user/profile/4156283" keep-scroll-position="true" className="u1blx6u2 user-info head">
                                                    <img alt="" className="avatar" src={noAvatar} />
                                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="avatar-icon">
                                                        <path
                                                            fill="#ffd308"
                                                            d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z"
                                                        />
                                                    </svg>
                                                </a>
                                                <div className="content-box">
                                                    <div className="champion__title">
                                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="title-icon">
                                                            <path
                                                                fill="#ffd308"
                                                                d="M27.924 14.807l-4.892 11.74h-14.063l-4.892-11.74c-1.198-0.105-2.14-1.099-2.14-2.324 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.498-0.157 0.957-0.421 1.336 0.827 1.307 2.274 2.18 3.937 2.18 2.182 0 3.999-1.497 4.522-3.516l0.035-0.197 0.131-2.472c-0.698-0.406-1.172-1.153-1.172-2.019 0-1.295 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 0.866-0.474 1.613-1.172 2.019l0.082 2.434 0.084 0.235c0.523 2.018 2.341 3.516 4.522 3.516 1.663 0 3.109-0.873 3.937-2.18-0.264-0.379-0.421-0.839-0.421-1.336 0-1.294 1.049-2.344 2.344-2.344s2.344 1.049 2.344 2.344c0 1.225-0.942 2.218-2.14 2.324z"
                                                            />
                                                        </svg>
                                                        <div className="contest-ml">Last Champion</div>
                                                    </div>
                                                    <a href="#/user/profile/4156283" keep-scroll-position="true" className="u1blx6u2 user-info user-name">
                                                        <div className="name">4nayz</div>
                                                    </a>
                                                    <div className="profit">
                                                        <div className="profit-name">Profit</div>
                                                        <img alt="" className="coin-icon" src="/static_images/BCD.black.png" />{" "}
                                                        <span className="amount">4,968.24</span>
                                                        <div className="percent">(50%)</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cbqd3q7 is-active">
                                        <div className="title">
                                            <div className="active-icon">
                                                <svg className="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 32">
                                                    <path d="M1.28 0h78.201c0.707 0 1.28 0.573 1.28 1.28 0 0.26-0.079 0.513-0.227 0.727l-10.079 14.603c-0.325 0.47-0.298 1.099 0.065 1.541l9.676 11.756c0.449 0.546 0.371 1.352-0.175 1.802-0.229 0.189-0.517 0.292-0.813 0.292h-77.929c-0.707 0-1.28-0.573-1.28-1.28v-29.44c0-0.707 0.573-1.28 1.28-1.28z" />
                                                </svg>
                                                <SvgIcon dataKey="icon_Loading" />
                                                <div className="label">Active</div>
                                            </div>
                                            <div className="time">2022/10/15 ~ 2022/10/16</div>
                                        </div>
                                        <div className="list">
                                            <div className="list-head item">
                                                <div className="position">#</div>
                                                <div className="user-td">Player</div>
                                                <div className="wager">Wagered</div>
                                                <div className="prize">Prize</div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={gold} />
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/4156283" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">4nayz</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$2,825,875.40</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$3,733.61</span>
                                                    <div className="percent">(50%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={silver} />
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$2,524,812.14</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$1,866.80</span>
                                                    <div className="percent">(25%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={copper} />
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/4620442" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">Xhjtgatdhwb</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$1,815,360.42</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$896.06</span>
                                                    <div className="percent">(12%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>4th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$1,126,675.91</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$448.03</span>
                                                    <div className="percent">(6%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>5th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/3863476" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">jun kay</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$744,811.00</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$224.01</span>
                                                    <div className="percent">(3%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>6th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$573,813.57</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$112.00</span>
                                                    <div className="percent">(1.5%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>7th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$503,680.33</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$67.20</span>
                                                    <div className="percent">(0.9%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>8th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/2688895" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">Aymee</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$432,348.83</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$52.27</span>
                                                    <div className="percent">(0.7%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>9th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$351,000.00</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$37.33</span>
                                                    <div className="percent">(0.5%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>10th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/5938012" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">Sxcyjhfljwb</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$299,635.57</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$29.86</span>
                                                    <div className="percent">(0.4%)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cbqd3q7">
                                        <div className="title">
                                            <div className="active-icon">
                                                <svg className="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81 32">
                                                    <path d="M1.28 0h78.201c0.707 0 1.28 0.573 1.28 1.28 0 0.26-0.079 0.513-0.227 0.727l-10.079 14.603c-0.325 0.47-0.298 1.099 0.065 1.541l9.676 11.756c0.449 0.546 0.371 1.352-0.175 1.802-0.229 0.189-0.517 0.292-0.813 0.292h-77.929c-0.707 0-1.28-0.573-1.28-1.28v-29.44c0-0.707 0.573-1.28 1.28-1.28z" />
                                                </svg>
                                                <div className="label">Completed</div>
                                            </div>
                                            <div className="time">2022/10/14 ~ 2022/10/15</div>
                                        </div>
                                        <div className="list">
                                            <div className="list-head item">
                                                <div className="position">#</div>
                                                <div className="user-td">Player</div>
                                                <div className="wager">Wagered</div>
                                                <div className="prize">Prize</div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={gold} />
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/4156283" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">4nayz</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$6,098,477.12</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$4,968.24</span>
                                                    <div className="percent">(50%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={silver} />
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$2,667,313.05</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$2,484.12</span>
                                                    <div className="percent">(25%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <img alt="" className="user-ico" src={copper} />
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$2,451,608.39</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$1,192.37</span>
                                                    <div className="percent">(12%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>4th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/6036976" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">Tdnfkwjmjwb</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$1,871,472.79</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$596.18</span>
                                                    <div className="percent">(6%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>5th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/5436720" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">RectangleRock</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$1,815,910.04</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$298.09</span>
                                                    <div className="percent">(3%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>6th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$1,333,387.45</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$149.04</span>
                                                    <div className="percent">(1.5%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>7th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$968,283.63</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$89.42</span>
                                                    <div className="percent">(0.9%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>8th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$633,326.83</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$69.55</span>
                                                    <div className="percent">(0.7%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>9th</div>
                                                </div>
                                                <div className="user-td">
                                                    <a href="#/user/profile/6024385" keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">ANDRETVRPᵗʷᶦᵗᶜʰ</div>
                                                    </a>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$618,114.50</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$49.68</span>
                                                    <div className="percent">(0.5%)</div>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="position">
                                                    <div>10th</div>
                                                </div>
                                                <div className="user-td">
                                                    <span keep-scroll-position="true" className="u1blx6u2 user-info">
                                                        <img alt="" className="avatar" src={noAvatar} />
                                                        <div className="name">
                                                            <span className="hidden-name">
                                                                <SvgIcon dataKey="icon_Hidden" />
                                                                Hidden
                                                            </span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="wager">
                                                    <span className="coin">$498,067.01</span>
                                                </div>
                                                <div className="prize flex-middle">
                                                    <span className="coin">$39.74</span>
                                                    <div className="percent">(0.4%)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            default:
                return (
                    <div className="tabs-view" style={{transform: "none"}}>
                        <div className="bn59vbi">
                            <div className="empty sp23xgg ">
                                <img src={statusDarkMode ? emptyDark : emptyLight} alt="" />
                                <div className="msg">Oops! There is no data yet!</div>
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className="s1o3yrjt page-max-width-wrap">
            <div className="t1tuhu22">
                <div className="n60mjr9 game-nav-path">
                    <a href="/gamelist/brand" keep-scroll-position="true" className="path hover" title="BC Originals">
                        BC Originals
                    </a>
                    <SvgIcon dataKey="icon_Arrow" />
                    <span keep-scroll-position="true" className="path active" title="Crash">
                        Crash
                    </span>
                </div>
            </div>
            <GameShow gameId={`${id}`} />

            {renderGameInfo()}

            <div className="game-data">
                <div className="left-data full-data">
                    <div className="ggjjku9 s1kcy63f related-games">
                        <div className="grid-tit">
                            <span className="txt">Related Games</span>
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
                            {Array.from({length: 20}).map((x, index) => (
                                <SwiperSlide key={`${index}`}>{renderRelatedGameItem("", `${index}`)}</SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="latest-tit">Latest bet &amp; Race</div>

                    <div className="latest">
                        <Tabs defaultValue="tab1" className="ui-tabs tabs-circle game-tabs len-4" onValueChange={(v) => setTabName(v)}>
                            <div className="tabs-scroll">
                                <TabsList aria-label="Manage your account" className="tabs-navs">
                                    <TabsTrigger value="tab1" className={`tabs-nav ${tabName === "tab1" && "is-active"}`}>
                                        My bets
                                    </TabsTrigger>
                                    <TabsTrigger value="tab2" className={`tabs-nav ${tabName === "tab2" && "is-active"}`}>
                                        History
                                    </TabsTrigger>
                                    <TabsTrigger value="tab3" className={`tabs-nav ${tabName === "tab3" && "is-active"}`}>
                                        High rollers
                                    </TabsTrigger>
                                    <TabsTrigger value="tab4" className={`tabs-nav ${tabName === "tab4" && "is-active"}`}>
                                        Wager contest
                                    </TabsTrigger>
                                </TabsList>
                            </div>
                            <TabsContent value="tab1">{renderView("tab1")}</TabsContent>
                            <TabsContent value="tab2">{renderView("tab2")}</TabsContent>
                            <TabsContent value="tab3">{renderView("tab3")}</TabsContent>
                            <TabsContent value="tab4">{renderView("tab4")}</TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
