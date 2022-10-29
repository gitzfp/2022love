import SvgIcon from "../SvgIcon";
import Popup from "reactjs-popup";
import styles from "./gameList.module.css";
import {useAppSelector} from "app/hooks";
import {isDarkMode} from "../../features/setting/settingSlice";

interface BotInfoProps {
    item: any;
}

const BotInfo = ({item}: BotInfoProps) => {
    const darkModeStatus = useAppSelector(isDarkMode);
    const darkenStyle = darkModeStatus ? `${styles.darkenT1tfodyr} ${styles.t1tfodyr}` : styles.t1tfodyr;

    const renderTipItem = (item: any) => {
        return (
            <div className={darkenStyle} style={{marginLeft: "-9.5rem", marginBottom: ".2rem", whiteSpace: "nowrap"}}>
                <div className={`t182eoen`}>
                    <div className="item">
                        <div className="label">RTP:</div>
                        <div className="value cl-primary">{item.rtpDes}%</div>
                    </div>
                    <div className="item">
                        <div className="label">Recently Biggest Win:</div>
                        <div className="value">{item.biggestOdds}X</div>
                    </div>
                    <div className="bot">
                        <div className="targe">{item?.tags && item?.tags[0]}</div>
                        <div className="targe">{item?.tags && item?.tags[1]}</div>
                        <div className="targe">{item?.tags && item?.tags[2]}</div>
                        <div className="res">
                            <div>{item.providerName}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bot-info">
            <div className="game-tit">
                <a href="/provider/BC Originals" keep-scroll-position="true" className="txt">
                    {item.providerName}
                </a>
                <Popup
                    trigger={(_) => (
                        <div className="s1s823mz">
                            <button>
                                <SvgIcon dataKey="icon_Inform" />
                            </button>
                        </div>
                    )}
                    position="top left"
                    on={["hover", "focus"]}
                    keepTooltipInside={true}
                    arrowStyle={{width: 0}}
                    closeOnDocumentClick>
                    {renderTipItem(item)}
                </Popup>
            </div>
        </div>
    );
};

export default BotInfo;
