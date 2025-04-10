import React from 'react';
import { Button, Box } from '@mui/joy';
import { Back } from '@/assets/icons';
import { useNavigate } from 'react-router';
import PropTypes from "prop-types";

export default function BackIcon({ showBack, isCollapsed }) {
    const navigate = useNavigate();
    if (!showBack) {
        return (
            <Box
                sx={{
                    height: '40px',
                    justifyContent: 'flex-start',
                }}
            >
            </Box>
        );
    }
    return (
        <Button
            className='Sidebar'
            sx={{
                justifyContent: 'flex-start',
                width: isCollapsed ? '40px' : '176px'
            }}
            onClick={()=>navigate(-1)}
        >
            <Back/>
            {isCollapsed ? null : 'Back'}
        </Button>
    );
}

BackIcon.propTypes = {
    showBack: PropTypes.bool,
    isCollapsed: PropTypes.bool
};