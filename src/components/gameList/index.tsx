import GameItem from "./GameItem";

interface GameListProps {
    gameList: any[];
}
const GameList = (props: GameListProps) => {
    return (
        <div className="game-list">
            {props.gameList?.map((item: any, index: number) => {
                return <GameItem item={item} key={index} />;
            })}
        </div>
    );
};

export default GameList;
