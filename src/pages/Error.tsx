import { Box, Typography, Button, Stack } from '@mui/joy';
import { Home, RefreshCw } from 'lucide-react';

const Error = ({
                       code = 404,
                       title = 'Page Not Found',
                       message = "The page you're looking for doesn't exist or has been moved.",
                       onRetry = () => window.location.reload(),
                       onHome = () => window.location.href = '/'
                   }) => {
    return (
        <Box 
            className="bg-primary-500"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                // bgcolor: 'background.surface',
                p: 2
            }}
        >
            <Stack
                spacing={4}
                alignItems="center"
                textAlign="center"
            >
                {/* Error Code */}
                <Typography
                    level="h1"
                    sx={{
                        fontSize: { xs: '4rem', sm: '6rem' },
                        fontWeight: 'bold',
                        color: 'primary.500',
                        textShadow: '4px 4px 0px rgba(0,0,0,0.1)'
                    }}
                >
                    {code}
                </Typography>

                {/* Title */}
                <Typography
                    level="h2"
                    sx={{
                        fontSize: { xs: '1.5rem', sm: '2rem' },
                        fontWeight: 600,
                        mb: 1
                    }}
                >
                    {title}
                </Typography>

                {/* Message */}
                <Typography
                    level="body-lg"
                    sx={{
                        color: 'neutral.500',
                        maxWidth: '400px',
                        mb: 2
                    }}
                >
                    {message}
                </Typography>

                {/* Action Buttons */}
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={2}
                    sx={{ mt: 2 }}
                >
                    <Button
                        className='Primary'
                        startDecorator={<RefreshCw size={18} />}
                        onClick={onRetry}
                    >
                        Try Again
                    </Button>
                    {/*<Button*/}
                    {/*    variant="outlined"*/}
                    {/*    color="neutral"*/}
                    {/*    startDecorator={<Home size={18} />}*/}
                    {/*    onClick={onHome}*/}
                    {/*>*/}
                    {/*    Back to Home*/}
                    {/*</Button>*/}
                </Stack>

                {/* Optional: Decorative Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, var(--joy-palette-primary-500), var(--joy-palette-primary-200))'
                    }}
                />
            </Stack>
        </Box>
    );
};

export default Error;