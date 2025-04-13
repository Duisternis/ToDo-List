import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import VpnKeyRoundedIcon from '@mui/icons-material/VpnKeyRounded';
import Account from './Account';
import { useAuth } from '../context/useAuth';
import { Avatar, Tooltip } from '@mui/material';
import { blue } from '@mui/material/colors';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, isLoggedIn, logout } = useAuth();

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-7xl font-ropasans text-custom-text'>Notes!</h1>
            <div>
                {!isLoggedIn() && <Button onClick={toggleDrawer(true)} size="medium" endIcon={<VpnKeyRoundedIcon />}>login</Button>}

                {isLoggedIn() && <Tooltip title="Logout" arrow>
                    <Button onClick={logout} size="medium" startIcon={<Avatar sx={{ width: 34, height: 34, bgcolor: blue[200] }} variant="rounded">{user.username[0]}</Avatar>}>{user.username}</Button>
                </Tooltip>
                }

                <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
                    <Box sx={{ width: 300 }} role="presentation">
                        <Account toggleDrawer={setOpen} />
                    </Box>
                </Drawer>
            </div>
        </div>
    )
}

export default Navbar