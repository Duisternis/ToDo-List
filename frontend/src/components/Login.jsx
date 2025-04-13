import { useState } from 'react';
import { TextField, IconButton, Button, InputAdornment } from "@mui/material"
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import * as Yup from 'yup';
import { useAuth } from '../context/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const validation = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
});

const Login = ({ toggleDrawer }) => {

    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors }} = useForm({ resolver: yupResolver(validation) });

    const handleLogin = async (form) => {
        const status = await loginUser(form.username, form.password);
        if (status) {
            toggleDrawer(false);
        } 
    };
    
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <TextField sx={{ mt: 2 }} label="Enter your username." variant="outlined" fullWidth slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                },
            }} {...register("username")} error={!!errors.username} helperText={errors.username ? errors.username.message : ""} />

            <TextField sx={{ my: 2 }} label="Password" variant="outlined" fullWidth type={showPassword ? 'text' : 'password'} slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                                }
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                onMouseUp={handleMouseUpPassword}
                                edge="end"
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                },
            }} {...register("password")} error={!!errors.password} helperText={errors.password ? errors.password.message : ""} />

            <Button type="submit" variant="outlined" size='large' fullWidth>login</Button>
        </form>
    )
}

export default Login