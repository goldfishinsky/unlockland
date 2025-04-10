import {useEffect, useState} from 'react';
import { Outlet } from 'react-router';
import {Stack, Box} from "@mui/joy";
// import Map from "/src/layouts/Map";
// import {usePageSetting} from "../contexts/PageSettingContext";
import Sidebar from "./Sidebar";

const BasicLayout = () => {
    // const pageSetting = usePageSetting();
    // mock data
    const pageSetting = {
        isCollapsed: false,
        isDataFolded: false,
    };
    function calcMapWidth() {
        if (pageSetting.isCollapsed) {
            if (pageSetting.isDataFolded) {
                return 'calc(100% - 48px - 16px)';
            }
            else {
                return 'calc(100% - 600px - 16px - 16px)';
            }
        } else {
            return pageSetting.isDataFolded ? 'calc(100% - 184px - 16px)' : 'calc(100% - 736px - 16px - 16px)';
        }
    }

    useEffect(() => {
        setMapWidth(calcMapWidth());
    }, [calcMapWidth, pageSetting]);

    const [mapWidth, setMapWidth] = useState(calcMapWidth());

    return (
        <Stack
            direction='row'
            sx={(theme) => ({
                overflow: 'auto',
                width: '100%',
                backgroundColor: theme.vars.palette.primary.solidBg,
                flexShrink: 0,
                justifyContent: 'flex-start',
                gap: 0,
                flexWrap: "nowrap"
            })}
        >
            <Sidebar />

            <Box
                sx={{
                    width: pageSetting.isDataFolded ? '0px' : '552px',
                    p: pageSetting.isDataFolded ? '16px 0' : '16px 16px 16px 0',
                    marginLeft: pageSetting.isCollapsed ? '48px' : '184px',
                    transition: 'all 0.3s',
                    overflowX: 'hidden',
                    overflowY: 'auto'
                }}
            >
                <Box
                    sx={({
                        width: '552px',
                        borderRadius: '16px',
                        flexShrink: 0,
                        height: '100%',
                    })}
                >
                    <Outlet />
                </Box>
            </Box>

            <Box sx={{
                position: 'fixed',
                top: '0',
                right: '16px',
                margin:  '16px 0',
                width:  mapWidth,
                transition: 'all 0.3s',
            }}
                 style={{
                     height: 'calc(100vh - 32px)',
                     borderRadius: '16px',
                     overflow: 'hidden'
                 }}
            >
                {/* <Map/> */}
                <div>我是地图</div>
            </Box>
        </Stack>
    );
};

export default BasicLayout;