import { useAppDispatch, useAppSelector } from "app/hooks";
import { openForSidebarMobile, setOpenForSidebarMobile } from "features/setting/settingSlice";
import { useEffect } from "react";
import SidebarMobile from "./SidebarMobile";
import SvgIcon from "./SvgIcon";

const Tabbar = () => {
	const dispatch = useAppDispatch();
	const openSidebarStatus = useAppSelector(openForSidebarMobile);

	useEffect(() => {
		dispatch(setOpenForSidebarMobile(false));
	}, [dispatch]);

	return (
		<>
			<div className="solyd0n">
				<button
					className="ui-button button-normal tab-item"
					onClick={() => dispatch(setOpenForSidebarMobile(true))}>
					<div className="button-inner">
						<SvgIcon dataKey="icon_Tighten" />
						<div className="tab-name">Menu</div>
					</div>
				</button>
				<button className="ui-button button-normal tab-item">
					<div className="button-inner">
						<SvgIcon dataKey="icon_Casino" />
						<div className="tab-name">Casino</div>
					</div>
				</button>
				<button className="ui-button button-normal tab-item">
					<div className="button-inner">
						<SvgIcon dataKey="icon_Sports" />
						<div className="tab-name">Sports</div>
					</div>
				</button>
				<button className="ui-button button-normal tab-item">
					<div className="button-inner">
						<div className="badge s1pykudy ">99</div>
						<SvgIcon dataKey="icon_Chat" />
						<div className="tab-name">Chat room</div>
					</div>
				</button>
			</div>
			{openSidebarStatus && <SidebarMobile />}
		</>
	);
};

export default Tabbar;
