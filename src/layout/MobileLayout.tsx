import {Stack, Box, Typography} from "@mui/joy";
import {Outlet} from "react-router";

const MobileLayout = () => {
    return (
        <Stack sx={{height: '100vh', width:'100vw'}}>
            <Box style={{
                position:'absolute',
                top:0,
                height:'calc(35% + 36px)',
                width:'100%'
            }}>
                {/* <Map /> */}
            </Box>
            <Box sx={{
                position:'absolute',
                backgroundColor:'var(--meton-light-assist-inverse)',
                bottom:0,
                height:'65%',
                width:'100%',
                borderRadius: '16px 16px 0 0',
                overflow: 'auto',
                zIndex: 90,
                WebkitOverflowScrolling: 'touch',  // iOS 滚动优化
                '&::-webkit-scrollbar': {          // 自定义滚动条样式（可选）
                    display: 'none'                  // 隐藏滚动条
                },
                scrollbarWidth: 'none',            // Firefox 隐藏滚动条
                msOverflowStyle: 'none'            // IE 隐藏滚动条
            }}>
                <Box sx={{height:'16px', width:'100%', position:'fixed', borderRadius: '16px 16px 0 0', top:'35%', backgroundColor:'var(--meton-light-assist-inverse)', zIndex:99, minHeight: '16px'}}/>
                <Outlet />
            </Box>
        </Stack>
    );
};

export default MobileLayout;