import {useAppDispatch, useAppSelector} from "app/hooks";
import {LoginType} from "utils/constants";
import {isMobile, setLoginType} from "../features/setting/settingSlice";

const HeaderButtons = () => {
    const mobileStatus = useAppSelector(isMobile);
    const dispatch = useAppDispatch();
    const signUpButton = () => {
        return (
            <button
                className="ui-button button-normal s-conic"
                onClick={() => {
                    dispatch(setLoginType(LoginType.REGIST));
                }}>
                <div className="button-inner">Sign up</div>
            </button>
        );
    };

    return (
        <>
            <p
                className="sign-in"
                onClick={() => {
                    dispatch(setLoginType(LoginType.LOGIN));
                }}>
                Sign in
            </p>
            {mobileStatus ? signUpButton() : <div className="sign-up-wrap">{signUpButton()}</div>}
        </>
    );
};

export default HeaderButtons;
