import applepay from "../themes/202210/assets/applepay.0e9ab5f5.png";
import googlepay from "../themes/202210/assets/googlepay.36a59f80.png";
import samsungpay from "../themes/202210/assets/samsungpay.8da55069.png";
import masterpay from "../themes/202210/assets/masterpay.9a38df7b.png";
import visapay from "../themes/202210/assets/visapay.a1cbd85f.png";

const C3 = () => {
    return (
        <div className="sd1yyof">
            <div className="payment-list">
                <div className="top-list">
                    <img src={applepay} alt="" />
                    <img src={googlepay} alt="" />
                    <img src={samsungpay} alt="" />
                </div>
                <div className="bot-list">
                    <img src={masterpay} alt="" />
                    <img src={visapay} alt="" />
                </div>
            </div>
            <div className="payment-opt">
                <div className="payment-cont">
                    <div className="payment-title">Fast &amp; Easy Way Buy Crypto Currency</div>
                    <div className="payment-desc">
                        Up to <span>1 BTC</span> Deposit Bonus
                    </div>
                    <div className="btn-wrap">
                        <button className="ui-button button-normal s-conic2">
                            <div className="button-inner">Buy Crypto</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default C3;
