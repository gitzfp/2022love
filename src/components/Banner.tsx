import { svgIcon } from "utils/svgIcons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import imgBanner from "assets/banner.temp.png";
import { useCallback, useEffect, useState } from "react";
import { isMobile } from "features/setting/settingSlice";
import { useAppSelector } from "app/hooks";

interface IBanner {
	url: string;
	img: string;
	title: string;
	isNew: boolean;
}

const Banner = () => {
	const banners: IBanner[] = Array.from({ length: 12 });
	const [nodeItems, setNodeItems] = useState(4);
	const isMobileStatus = useAppSelector(isMobile);
	const [activeIndex, setActiveIndex] = useState(1);

	const handleResize = useCallback(() => {
		setNodeItems(window.innerWidth > 1092 ? 4 : 3);
	}, []);

	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	const renderBanners = () => {
		const nodes = Math.ceil(banners.length / nodeItems);
		return Array.from({ length: nodes }).map((_, i) => (
			<SwiperSlide key={`banner_${i}`}>
				<div className="s1sgoeti">
					{Array.from({ length: nodeItems }).map((_, j) => {
						const index = j + i * nodeItems;
						const banner = banners[index];
						return (
							<a
								className="l1e6f379"
								key={`banner_${i}_${j}`}
								href={banner?.url}
								style={{ flex: "1 1 0%" }}>
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
				</div>
			</SwiperSlide>
		));
	};

	const renderBannersMobile = () => {
		return banners.map((banner, index) => (
			<SwiperSlide key={`banner_pc_${index}`}>
				<div className="s1sgoeti">
					<a className="l1e6f379" href={banner?.url} style={{ flex: "1 1 0%" }}>
						{banner?.isNew && (
							<div className="s1soke7x">
								<div className="inner">New</div>
							</div>
						)}
						<div className="lazy-img" draggable="false">
							<img src={imgBanner} alt={banner?.title} />
						</div>
					</a>
				</div>
			</SwiperSlide>
		));
	};

	if (isMobileStatus) {
		return (
			<div id="home-banner" className="so4edg banner gradient-mobile">
				<div className="gradient-wrap">
					<Swiper
						slidesPerView={1}
						spaceBetween={0}
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
					<div className="p1puwuv8 swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
						{banners.map((item, i) => (
							<span
								key={`p_${i}`}
								className={`swiper-pagination-bullet ${
									(activeIndex === i || activeIndex - banners.length === i) &&
									"swiper-pagination-bullet-active"
								}`}></span>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div id="home-banner" className="so4edg banner">
			<div className="gradient-wrap">
				<Swiper
					slidesPerView={1}
					spaceBetween={30}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					className="swhgpqh"
					navigation={{ nextEl: ".navigation-next-banner", prevEl: ".navigation-prev-banner" }}
					modules={[Navigation]}>
					{renderBanners()}
				</Swiper>
				<div className="vv88ykt navigation-btns-wrap">
					<button className="prev navigation-prev-banner">{svgIcon("icon_Arrow")}</button>
					<button className="navigation-next-banner">{svgIcon("icon_Arrow")}</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
