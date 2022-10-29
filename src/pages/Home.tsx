// import { Banner } from "../components";
import C1 from "./C1";
import C2 from "./C2";
import C3 from "./C3";
import C4 from "./C4";
import C5 from "./C5";

const Home = () => {
    return (
        <div className="s16lovai">
            {/* <Banner /> */}

            <C1 />

            <div className="home-container page-max-width-wrap">
                <C2 />
                <C3 />
                <C4 />
                <C5 />
            </div>
        </div>
    );
};

export default Home;
