import {Button, Typography, Tooltip} from '@mui/joy';
import {Discover, Save, History} from '@/assets/icons';
import PropTypes from "prop-types";
import React from 'react';

export default function UnitIcon({ isCollapsed, currency }) {
    return (
        <Button className='Sidebar'
            sx={(theme) => ({
                justifyContent: isCollapsed ? 'center' : 'flex-start',
                width: isCollapsed ? '40px': '176px',
            })}
        >
            <Typography
                sx={(theme) => ({
                    ...theme.typography.note,
                    color: theme.vars.palette.theme.main,
                    width: '32px',
                    height: '32px',

                    justifyContent: 'center',
                    alignContent: 'center',
                })}
            >
                {currency}
            </Typography>
            {isCollapsed ? null : (
                <Typography
                    sx={(theme) => ({
                        ...theme.typography.body,
                        color: theme.vars.palette.text.normal,
                    })}
                >
                    Unit Setting
                </Typography>
            )}
        </Button>
    )
}

UnitIcon.propTypes = {
    isCollapsed: PropTypes.bool,
    currency: PropTypes.string
};