import {svgIcon} from "utils/svgIcons";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

import imgBanner from "assets/banner.temp1.png";
import {useEffect, useState} from "react";
import {isMobile} from "features/setting/settingSlice";
import {useAppSelector} from "app/hooks";
import {useWindowSize} from "react-use";

interface IBanner {
    url: string;
    img: string;
    title: string;
    isNew: boolean;
}

const Banner = () => {
    const banners: IBanner[] = Array.from({length: 8});
    const [nodeItems, setNodeItems] = useState(4);
    const isMobileStatus = useAppSelector(isMobile);
    const [activeIndex, setActiveIndex] = useState(1);
    const {width} = useWindowSize();

    useEffect(() => {
        if (isMobileStatus || width < 805) {
            setNodeItems(1);
        } else if (width < 875) {
            setNodeItems(2);
        } else if (width < 1145) {
            setNodeItems(3);
        } else {
            setNodeItems(4);
        }
    }, [width, isMobileStatus]);

    const renderBanners = () => {
        const nodes = Math.ceil(banners.length / nodeItems);
        return Array.from({length: nodes}).map((_, i) => (
            <SwiperSlide key={`banner_${i}`}>
                {Array.from({length: nodeItems}).map((_, j) => {
                    const index = j + i * nodeItems;
                    const banner = banners[index];
                    return (
                        <a className={`img-box w-${nodeItems}`} key={`banner_${i}_${j}`} href={banner?.url} style={{marginRight: 10}}>
                            {banner?.isNew && (
                                <div className="s1soke7x">
                                    <div className="inner">New</div>
                                </div>
                            )}
                            <div className="lazy-img" draggable="false">
                                <img src={imgBanner} alt={banner?.title} />
                            </div>
                        </a>
                    );
                })}
            </SwiperSlide>
        ));
    };

    const renderBannersMobile = () => {
        return banners.map((banner, index) => (
            <SwiperSlide key={`banner_pc_${index}`}>
                <a className="img-box w-1" href={banner?.url}>
                    {banner?.isNew && (
                        <div className="s1soke7x">
                            <div className="inner">New</div>
                        </div>
                    )}
                    <img src={imgBanner} alt={banner?.title} />
                </a>
            </SwiperSlide>
        ));
    };

    if (isMobileStatus) {
        return (
            <div id="home-banner" className="so4edg banner gradient-mobile">
                <div className="s1dfjjv9">
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        pagination={{
                            clickable: false,
                            el: ".swiper-pagination",
                        }}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        className="swhgpqh"
                        modules={[Pagination]}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
                        {renderBannersMobile()}
                    </Swiper>
                    <div className="p1vc93lr swiper-home-banner-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                        {banners.map((item, i) => (
                            <span
                                key={`p_${i}`}
                                className={`swiper-pagination-bullet ${
                                    (activeIndex === i || activeIndex - banners.length === i) && "swiper-pagination-bullet-active"
                                }`}></span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="s1dfjjv9">
                <Swiper
                    slidesPerView={nodeItems <= 2 ? 1.5 : 1}
                    // spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    className="swhgpqh"
                    navigation={{nextEl: ".navigation-next-banner", prevEl: ".navigation-prev-banner"}}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    modules={[Navigation]}>
                    {renderBanners()}
                </Swiper>
                {/* <div className="vv88ykt navigation-btns-wrap"> */}
                <button className="navigation-prev-banner ui-button button-normal navigation-prev-home-banner home-swiper-btn prev">
                    {svgIcon("icon_Arrow")}
                </button>
                <button className="navigation-next-banner ui-button button-normal navigation-next-home-banner home-swiper-btn next">
                    {svgIcon("icon_Arrow")}
                </button>
                {/* </div> */}
                <div className="p1vc93lr swiper-home-banner-pagination swiper-pagination-bullets swiper-pagination-horizontal">
                    {Array.from({length: Math.ceil(banners.length / nodeItems)}).map((item, i) => (
                        <span
                            key={`p_${i}`}
                            className={`swiper-pagination-bullet ${(activeIndex === i || activeIndex - 3 === i) && "swiper-pagination-bullet-active"}`}></span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Banner;
