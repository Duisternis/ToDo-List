import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const validation = Yup.object().shape({
    content: Yup.string().required('Content is required')
});

const AddNotesButton = ({ noteHandler }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(validation) });
    const [open, setOpen] = useState(false);   

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
        reset();
    };

    return (
        <>
            <Button sx={{ my: 3 }} startIcon={<AddIcon />} variant="outlined" onClick={handleClickOpen}>
                add note
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: handleSubmit((data) => noteHandler(data, handleClose))
                }}
            >
                <DialogTitle>Add New Note</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Quickly jot down your thoughts, tasks, or reminders. Fill in the details and save to keep track of your ideas!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Your Note"
                        type="text"
                        fullWidth
                        variant="standard"
                        {...register("content")}
                        error={!!errors.content} helperText={errors.content ? errors.content.message : ""}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">add</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddNotesButton