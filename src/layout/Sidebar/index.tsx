import { Stack } from '@mui/joy';
import {useContext, useRef} from 'react';
import {
    BackIcon,
    CollapseIcon,
    LogoIcon,
    MessageIcon,
    FoldDataIcon,
    UnitIcon,
    UserIcon
} from "./Icons";
// import { usePageSetting, usePageSettingDispatch } from "../../contexts/PageSettingContext";
// import { UserContext } from "../../contexts/UserContext";
import { useLocation } from 'react-router-dom';


/**
 * The sidebar component is a vertical menu that contains the following elements:
 * - `dataFoldDefault {boolean|null}` whether the data is folded by default. Set null if you don't need to show.
 * - `messageNum {number}` the number of messages to be displayed
 * - `currency {'CAD'|'USD'|'CNY'}` the currency to be displayed
 * - `login {string|null}` the login name, max two characters. Set null if user is not logged in.
 * @returns {JSX.Element}
 */

const Sidebar = () => {
    // const pageState = usePageSetting();
    // const pageDispatch = usePageSettingDispatch();
    // const {state: userState} = useContext(UserContext);
    const sideBarContainer = useRef(null);

    const navigate = useLocation().pathname.split('/')[1];

    const dataFoldDefault = false;
    const messageNum =  0;
    const currency = 'CAD';
    const login = 'jalen';

    const currencySign = {'CAD' : 'CA$', 'USD' : 'US$', 'CNY' : 'CN¥'};
    let showBack;
    let iconSet;
    let showBottom;
    let collapsedDefault;


    switch (navigate) {
        case 'share':
            showBack = false;
            iconSet = null;
            collapsedDefault = true;
            showBottom = false;
            break;
        default:
            showBack = false;
            iconSet = null;
            collapsedDefault = true;
            showBottom = false;
            break;
    }


    let isCollapsed = false;
    if (navigate === '/login') {
        isCollapsed = true;
    }

    /**
     * Render the collapse icon based on the collapse status
     * @param collapsedDefault {boolean|null} whether the sidebar is collapsed by default. Set null if you don't need to show.
     * @returns {JSX.Element|null} the collapse icon or null
     */
    const renderCollapseIcon = (collapsedDefault) => {
        if (collapsedDefault === null) {
            return null;
        }
        return (
            <CollapseIcon isCollapsed={isCollapsed} toggleCollapse={() => console.log('collapse clicked')}/>
        )
    }

    /**
     * Render the fold data icon based on the data fold status
     * @param dataFoldDefault {boolean|null} whether the data is folded by default. Set null if you don't need to show.
     * @returns {JSX.Element|null} the fold data icon or null
     */
    const renderFoldDataIcon = (dataFoldDefault) => {
        if (dataFoldDefault === null) {
            return null;
        }
        return (
            <FoldDataIcon
                isCollapsed={isCollapsed}
                isDataFolded={false}
            />
        )
    }


    /** Render the which icon set should be displayed
     *
     * @param iconSet {'list'|'detail'|null} the icon set to be displayed
     * @returns {JSX.Element|null} the icon set or null
     */
    const renderMainIcon = (iconSet) => {
        switch (iconSet) {
            default:
                return null;
        }
    }


    const renderBottomMenu = (showBottom, messageNum, currency, login, currencySign) => {
        if (!showBottom) {
            return null;
        }
        return (
            <Stack
                spacing={2}
                direction="column"
                justifyContent='flex-end'
                alignItems='start'
                sx={{ mb: 2 }}
            >
                <MessageIcon isCollapsed={isCollapsed} messageNum={messageNum} />

                {renderFoldDataIcon(dataFoldDefault)}

                <Stack
                    spacing={0}
                    direction="column"
                >
                    <UnitIcon isCollapsed={isCollapsed} currency={currencySign[currency]} />

                    <UserIcon isCollapsed={isCollapsed} login={login} />
                </Stack>
            </Stack>
        )
    }

    // The return statement of the Icons component:
    return (
        <Stack direction = "column" ref={sideBarContainer}
               sx = {{
                   position: 'fixed',
                   top:0,
                   left:0,
                   display: 'flex',
                   width: isCollapsed ? '48px':'184px',
                   transition: 'width 0.3s',
                   height: '100vh',
                   backgroundColor: 'transparent',
                   flexShrink: 0,
                   px: 0.5,
                   boxSizing: 'border-box'
               }}>
            {/*Top menu*/}
            <Stack
                spacing = {2}
                direction = "column"
                justifyContent = 'flex-start'
                sx={{
                    mt: 1.5,
                    flexGrow: 1 }}
            >
                <LogoIcon isCollapsed={isCollapsed} />

                <BackIcon isCollapsed={isCollapsed} showBack={showBack}/>

                {renderMainIcon(iconSet)}
            </Stack>

            {/*Collapse icon*/}
            {renderCollapseIcon(collapsedDefault)}

            {/*Bottom menu*/}
            {renderBottomMenu(showBottom, messageNum, currency, login, currencySign)}
        </Stack>
    )
}

export default Sidebar;