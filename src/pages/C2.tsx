import casino from "../themes/202210/assets/casino.74471929.png";
import casino_icon from "../themes/202210/assets/casino_icon.aa1f6594.png";
import sport_icon from "../themes/202210/assets/sports_icon.ee7aa9c3.png";
import sports from "../themes/202210/assets/sports.2f749e0a.png";

const C2 = () => {
    return (
        <div className="s6jvneh">
            <a href="/casino" keep-scroll-position="true" className="nav-item-wrap">
                <div className="nav-item">
                    <div className="top-img-wrap">
                        <img className="top-img" src={casino} alt="" />
                    </div>
                    <div className="wrap">
                        <div className="cont">
                            <div className="tit">
                                <img className="icon-img" src={casino_icon} alt="" />
                                <div className="txt ttu">Casino</div>
                            </div>
                            <div className="desc">
                                Dive into the wide range of our in-house games, slots, and live casino to experience a thrilling casino adventure.
                            </div>
                            <button className="ui-button button-normal s-conic3">
                                <div className="button-inner">Go to Casino</div>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
            <a href="/sports" keep-scroll-position="true" className="nav-item-wrap">
                <div className="nav-item sport">
                    <div className="top-img-wrap">
                        <img className="top-img" src={sports} alt="" />
                    </div>
                    <div className="wrap">
                        <div className="cont">
                            <div className="tit">
                                <img className="icon-img" src={sport_icon} alt="" />
                                <div className="txt ttu">Sports</div>
                            </div>
                            <div className="desc">
                                Now back your favourite teams and bet on over 80 sports, including Football, NFL, Cricket, Esports and more!
                            </div>
                            <button className="ui-button button-normal s-conic">
                                <div className="button-inner">Go to Sports</div>
                            </button>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default C2;
