import {Button, Tooltip} from '@mui/joy';
import {FoldData, SpreadData} from '@/assets/icons';
import React from 'react';
// import {usePageSettingDispatch} from "../../../contexts/PageSettingContext";

export default function FoldDataIcon({ isCollapsed, isDataFolded}) {
    // const dispatch = usePageSettingDispatch();
    return (
        <Tooltip title={isDataFolded ? 'Spread Data' : 'Fold Data'} placement='right' disableHoverListener={!isCollapsed}>
            <Button
                className='Sidebar'
                onClick={() => console.log({ type: 'TOGGLE_DATA_FOLD' })}
                sx={{
                    width: isCollapsed ? '40px' : '176px',
                    justifyContent: 'flex-start',
                }}
            >
                {isDataFolded ? <SpreadData/> : <FoldData/>}
                {!isCollapsed && (isDataFolded ? 'Spread Data' : 'Fold Data')}
            </Button>
        </Tooltip>
    );
}