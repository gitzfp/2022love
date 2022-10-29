import BotInfo from "./BotInfo";

interface ItemProps {
    item: any;
    idx?: number;
}

const GameItem = ({item, idx}: ItemProps) => {
    return (
        <div className="sfistqe" key={idx}>
            <a href="/game/classic-dice" keep-scroll-position="true" className="game-img-wrap">
                <div className="lazy-img game-img">
                    <img src={item.logoUrl} alt="" />
                </div>
            </a>
            <BotInfo item={item} />
        </div>
    );
};

export default GameItem;
