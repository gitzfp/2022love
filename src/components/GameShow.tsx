import Crash from "./games/Crash";
interface GameShowProps {
    gameId: string;
}

const GameShow: React.FC<GameShowProps> = ({gameId}) => {
    return <Crash />;
};

export default GameShow;
