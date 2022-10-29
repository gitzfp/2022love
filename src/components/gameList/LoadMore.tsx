import {useAppSelector} from "app/hooks";
import {isDarkMode} from "../../features/setting/settingSlice";

type LoadMoreProps = {
    setLoadMore: (load: boolean) => void;
    disabled: boolean;
    noMore: boolean;
};
const LoadMore = (props: LoadMoreProps) => {
    const isDark = useAppSelector(isDarkMode);
    return (
        <div className="more-btn-wrap">
            <button className={`ui-button button-normal show-more`}>
                <div className="button-inner">
                    {props.disabled && (
                        <div className="e1a15m3u loading">
                            <svg viewBox="0 0 84 24" fill="#fff">
                                <circle cx="18" cy="12" r="6"></circle>
                                <circle cx="18" cy="12" r="6"></circle>
                                <circle cx="42" cy="12" r="6"></circle>
                                <circle cx="66" cy="12" r="6"></circle>
                            </svg>
                        </div>
                    )}
                    {!props.disabled && (
                        <div
                            style={{color: !isDark ? "#000000" : "#ffffff", padding: "0 37px", fontWeight: 400}}
                            onClick={() => {
                                console.log(props.disabled, "====连续点击===");
                                if (!props.noMore) props.setLoadMore(true);
                            }}
                            keep-scroll-position="true"
                            className="">
                            {`${props.noMore ? "No More" : "Load More"}`}
                        </div>
                    )}
                </div>
            </button>
        </div>
    );
};

export default LoadMore;
