import { Button, Stack } from '@mui/joy';
import { FoldText, SpreadText } from '@/assets/icons';
import PropTypes from "prop-types";
import React from 'react';

/** Render the collapse icon based on the collapse status
 *
 * @param collapsedDefault {boolean|null} whether the sidebar is collapsed by default. Set null if you don't need to show.
 * @param toggleCollapse {function} the function to toggle the collapse status
 * @returns {JSX.Element} the collapse icon or null
 */
export default function CollapseIcon({ isCollapsed, toggleCollapse }) {

    return (
        <Stack
            direction="column"
            alignItems= {isCollapsed ? "flex-start" : "flex-end"}
            sx={{
                position: 'absolute',
                width: isCollapsed ? '40px' : '176px',
                top: '50%',
                transform: 'translate(0, -50%)',
                transition: 'all 0.3s',
                boxSizing: 'border-box',
            }}
        >
            <Button className='Sidebar'
                sx={{
                    justifyContent: isCollapsed ?'flex-start' : 'flex-end',
                    transform: isCollapsed ? 'translate(-4px, 0)' : 'translate(4px, 0)',
                    width: '40px',
                    padding: '4px 0',
                    borderRadius: isCollapsed ? '0 8px 8px 0' : '8px 0 0 8px',
                }}
                onClick={toggleCollapse}
            >
                {isCollapsed ? <SpreadText /> : <FoldText />}
            </Button>
        </Stack>
    );
}

CollapseIcon.propTypes = {
    isCollapsed: PropTypes.bool,
    toggleCollapse: PropTypes.func
};