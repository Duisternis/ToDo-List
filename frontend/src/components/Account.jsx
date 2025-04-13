import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import Login from './Login';
import SignUp from './SignUp';

const Account = ({ toggleDrawer }) => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="login or sign up">
                    <Tab label="login" value="1" />
                    <Tab label="sign up" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Login toggleDrawer={toggleDrawer} /></TabPanel>
                <TabPanel value="2"><SignUp toggleDrawer={toggleDrawer} /></TabPanel>
            </TabContext>
        </Box>
    )
}

export default Account