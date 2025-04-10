import {Button, Box, Typography} from "@mui/joy";
import {LoginIcon} from "@/assets/icons";
import PropTypes from "prop-types";

/**
 * UserIcon component. If the login is not null, then display the login name. Otherwise, display the login icon.
 * @param isCollapsed {boolean} whether the sidebar is collapsed
 * @param login {string|null} the login name
 * @returns {JSX.Element}  the login icon or login name
 */

export default function UserIcon({isCollapsed, login}) {
    return (
        <Button className='Sidebar'
            sx={{
                width: isCollapsed ? '40px': '176px',
                justifyContent: 'flex-start',
            }}
        >
            <Box
                sx={(theme) => ({
                    backgroundColor: theme.vars.palette.status.linkBg,
                    width: '32px',
                    height: '32px',
                    borderRadius: '4px',
                })}
            >
                {login ? (
                    <Typography
                        sx={(theme) => ({
                            width: '32px',
                            height: '32px',
                            ...theme.typography.emphasize,
                            color: theme.vars.palette.status.linkText,
                            alignContent: 'center',
                            justifyContent: 'center',
                        })}
                    >
                        {login.substring(0, 2)}
                    </Typography>
                ):
                    <LoginIcon />}
            </Box>
            {isCollapsed ? null : (login ? (
                <Typography
                    sx={{
                        width: '100%',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        textAlign: 'left',
                    }}
                >
                    {login}
                </Typography>
                ) : 'Login')}
        </Button>
    )
}

UserIcon.propTypes = {
    isCollapsed: PropTypes.bool,
    login: PropTypes.string
};