import {Message} from '@/assets/icons';
import {Button, Badge, Tooltip} from '@mui/joy';
import PropTypes from "prop-types";
import React from 'react';

export default function MessageIcon({ isCollapsed, messageNum }) {
    return (
    <Tooltip title={'Message'} placement='right' disableHoverListener={!isCollapsed}>
        <Button
            className='Sidebar'
            sx={{
                justifyContent: 'flex-start',
                width: isCollapsed ? '40px' : '176px'
            }}
        >
            <Badge
                badgeContent={messageNum}
                max={9}
                badgeInset="3px"
                slotProps={{
                    badge: {
                        sx: (theme) => ({
                            ...(messageNum > 9 && { width: '22px' }),
                            height: '16px',
                            borderRadius: '4px',
                            backgroundColor: theme.vars.palette.status.error,
                            ...theme.typography.note,
                            color: theme.vars.palette.assist.inverse,
                            border: 'none',
                            boxShadow: 'none'
                        })
                    }
                }}
            >
                <Message/>
            </Badge>
            {isCollapsed ? null : 'Message'}
        </Button>
    </Tooltip>
    )
}

MessageIcon.propTypes = {
    isCollapsed: PropTypes.bool,
    messageNum: PropTypes.number
};