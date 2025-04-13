import { useEffect, useState } from "react";
import AddNotesButton from "../components/AddNotesButton"
import Navbar from "../components/Navbar"
import Notes from "../components/Notes"
import { useToast } from "../context/useToast";
import { deleteNotesAPI, getNotesAPI, postNotesAPI } from "../services/NoteService";
import useHandleError from "../utils/ErrorHandler";
import { useAuth } from "../context/useAuth";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

const Home = () => {

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleError = useHandleError();
    const showToast = useToast();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn()) getNotes();
    }, [isLoggedIn]);

    const getNotes = () => {
        setLoading(true);
        getNotesAPI().then((res) => {
            setNotes(res.data);
            setLoading(false);
        }).catch((err) => {
            handleError(err);   
        });
    }

    const noteHandler = (data, handleClose) => {
        postNotesAPI(data.content).then((res) => {
            if (res) {
                showToast("Note created successfully", { variant: "success" });
            }
            handleClose();
            getNotes();
        }).catch((err) => {
            handleError(err);
        });
    }

    const deleteHandler = (id) => {
        deleteNotesAPI(id).then((res) => {
            if (res) {
                showToast("Note deleted successfully", { variant: "success" });
            }
            getNotes();
        }).catch((err) => {
            handleError(err);
        });
    }

    return (
        <div className="min-h-screen flex flex-col">
            <div className="md:w-[768px] w-full md:mx-auto px-5 my-5 flex flex-col gap-5 flex-1">
                <Box sx={{ fontFamily: 'Ropa Sans' }}>
                    <Navbar />
                    <AddNotesButton noteHandler={noteHandler} />
                    {isLoggedIn() ? (loading ? <div className="text-center"><CircularProgress /></div> : <Notes notes={notes} deleteHandler={deleteHandler} />) : <div className="text-lg text-custom-subtext font-ropasans">Get started by logging in or signing up to access the app!</div>}
                </Box>
            </div>

            <footer className="border-t border-[#2e2e2e] w-full font-ropasans text-custom-subtext">
                <div className="mx-auto max-w-screen-md py-4 px-9 flex items-center justify-between">
                    <span className="">© 2023 Powered by <a href="https://github.com/nyxknot" target="_blank" className="hover:underline underline-offset-4">Nyxknot</a>.</span>
                    <div className="flex gap-2 h-fit">
                        <a href="https://github.com/Duisternis" target="_blank">G</a>
                        <a href="https://www.instagram.com/not.vrnn/" target="_blank">I</a>
                        <a href="https://www.linkedin.com/in/varnan-matela/" target="_blank">L</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home