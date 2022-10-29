import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const useInGame = () => {
    const location = useLocation();
    const isInGame = location.pathname.substring(0, 6) === "/game/";
    useEffect(() => {
        document.getElementById("root")?.classList.toggle("ingames", isInGame);
    }, [isInGame]);
    return isInGame;
};

export default useInGame;
