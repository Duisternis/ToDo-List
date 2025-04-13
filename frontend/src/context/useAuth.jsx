import { createContext, useContext, useEffect, useState } from "react";
import { loginAPI, registerAPI } from "../services/AuthService";
import { useToast } from "./useToast";
import axios from "axios";
import useHandleError from "../utils/ErrorHandler";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);
    const handleError = useHandleError();
    const showToast = useToast();

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        setIsReady(true);
    }, [])

    const registerUser = async (username, email, password) => {
        await registerAPI(username, email, password).then((res) => {
            if (res) {
                localStorage.setItem("token", res.data.token);
                const userObj = {
                    username: res?.data.username,
                    email: res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token);
                setUser(userObj);
                axios.defaults.headers.common["Authorization"] = `Bearer ${res?.data.token}`;
                showToast("User registered successfully", { variant: "success" });
            }
        }).catch((err) => {
            handleError(err);
            throw err;
        });
        return true;
    };

    const loginUser = async (username, password) => {
        await loginAPI(username, password).then((res) => {
            if (res) {
                localStorage.setItem("token", res.data.token);
                const userObj = {
                    username: res?.data.username,
                    email: res?.data.email
                }
                localStorage.setItem("user", JSON.stringify(userObj));
                setToken(res?.data.token);
                setUser(userObj);
                axios.defaults.headers.common["Authorization"] = `Bearer ${res?.data.token}`;
                showToast("User login successfully", { variant: "success" });
            }
        }).catch((err) => {
            handleError(err);
            throw err;
        });
        return true;
    };

    const isLoggedIn = () => {
        return token !== null;
    };

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        axios.defaults.headers.common["Authorization"] = "";
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ user, token, registerUser, loginUser, isLoggedIn, logout }}>
            {isReady ? children : null}
        </UserContext.Provider>
    );
};

export const useAuth = () => useContext(UserContext);