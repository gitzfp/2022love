import {Outlet} from "react-router-dom";
import {Footer, Header, HeaderMobile, Sidebar, Tabbar} from "components";
import {useAppSelector} from "app/hooks";
import {isMobile} from "features/setting/settingSlice";
import useInGame from "hooks/useInGame";

const Dashboard = () => {
    const isMobileStatus = useAppSelector(isMobile);
    useInGame();

    return isMobileStatus ? (
        <>
            <HeaderMobile />
            <Outlet />
            <Footer />
            <Tabbar />
        </>
    ) : (
        <>
            <Header />
            <Sidebar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Dashboard;
