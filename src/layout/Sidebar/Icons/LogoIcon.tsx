import { Link } from 'react-router-dom';
import { Button } from '@mui/joy';
import { Logo, LogoText } from '@/assets/icons';
import PropTypes from "prop-types";
import React from 'react';



export default function LogoIcon({ isCollapsed }) {

    return (
        <Button className='Sidebar' component={Link} to='/'
                sx={{
            padding: 0,
            width: isCollapsed ? '40px' : '176px',
            justifyContent: 'flex-start',
        }}>
            {isCollapsed ? <Logo /> : <LogoText />}
        </Button>
    )
}

LogoIcon.propTypes = {
    isCollapsed: PropTypes.bool
};