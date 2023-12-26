import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Box, IconButton, Badge, Typography} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchAppBar from './SearchInput.js';

export default function Navbar() {
    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
            <Toolbar>
            <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
            mx: 2,
            display: { md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
        }}
            >
            Farmers Shop
        </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <SearchAppBar/>
            <Box>
            <IconButton
        size="large"
        aria-label="notifications"
        color="inherit">
            <Badge badgeContent={17} color="error">
            <NotificationsIcon />
            </Badge>
            </IconButton>
        </Box>
        
            </Toolbar>
            </AppBar>
            </Box>
    );
}
