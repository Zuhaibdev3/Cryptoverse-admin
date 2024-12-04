import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authConfig from "../config/auth";
import AuthServices from "../services/auth.service";
import toast from 'react-hot-toast';


const defaultProvider = {
    user: null,
    loading: "idle",
    setUser: () => null,
    setLoading: () => Boolean,
    showPopper: false,
    setShowPopper: () => Boolean,
    isInitialized: false,
    login: () => Promise.resolve(),
    forgotPass: () => Promise.resolve(),
    verifyOtp: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    reset: () => Promise.resolve(),
    setIsInitialized: () => Boolean,
    register: () => Promise.resolve(),
    updateProfile: () => Promise.resolve(),
    getUsers: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(defaultProvider.user);
    const [loading, setLoading] = useState(defaultProvider.loading);
    const [isInitialized, setIsInitialized] = useState(defaultProvider.isInitialized);
    const [showPopper, setShowPopper] = useState(defaultProvider.showPopper);
    const router = useNavigate();

    useEffect(() => {
        const initAuth = async () => {
            setLoading("pending")
            AuthServices.verify()
                .then(async ({ data: response }) => {
                    console.log("==========Login data================");
                    console.log(response);
                    console.log("====================================");

                    window.localStorage.setItem(
                        authConfig.storageTokenKeyName,
                        response.data.tokens.accessToken
                    );
                    window.localStorage.setItem(
                        authConfig.refreshTokenKeyName,
                        response.data.tokens.accessToken
                    );


                    setUser({ ...response.data.user });
                    setLoading("success")
                })
                .catch((error) => {
                    console.log(error, "error")
                    setLoading("error")
                });

        };
        initAuth();
    }, []);

    const handleLogin = (params) => {
        console.log("handle login")
        setLoading("pending")
        AuthServices.login(params)
            .then(async ({ data: response }) => {
                console.log("==========Login data================");
                console.log(response);
                console.log("====================================");
                window.localStorage.setItem(
                    authConfig.storageTokenKeyName,
                    response.data.tokens.accessToken
                );
                window.localStorage.setItem(
                    authConfig.refreshTokenKeyName,
                    response.data.tokens.accessToken
                );

                setUser({ ...response.data.user });

                const redirectURL = "/";
                router(redirectURL);
                setLoading("success")
                toast.success("Login successful")
            })
            .catch((error) => {
                console.log(error, "error")
                toast.error(error.response.data.message || "Something Went Wrong")
                setLoading("error")
            });
    };

    const handleForgotPassword = (params) => {
        return AuthServices.forgetPassword(params)
    };

    const handleVerifyOtp = (params) => {
        return AuthServices.verifyOtp(params)
    };

    const handleUpdateUserProfile = (params) => {
        return AuthServices.updateProfile(params)
    };

    const handleResetPassword = (params) => {
        return AuthServices.resetPassword(params)
    };

    const getUsers = () => {
        return AuthServices.getUsers()
    };

    const handleLogout = async () => {
        setUser(null);
        setIsInitialized(false);
        setLoading("pending")
        await AuthServices.logout()
        window.localStorage.removeItem("userData");
        window.localStorage.removeItem(authConfig.storageTokenKeyName);
        window.localStorage.removeItem(authConfig.refreshTokenKeyName);
        setLoading("success")
        toast.success("Logout successful")
        router('/signin');
    };

    console.log(user, "user auth context")

    const values = {
        user,
        loading,
        setUser,
        setLoading,
        isInitialized,
        setIsInitialized,
        login: handleLogin,
        logout: handleLogout,
        forgotPass: handleForgotPassword,
        verifyOtp: handleVerifyOtp,
        reset: handleResetPassword,
        setShowPopper,
        showPopper,
        updateProfile: handleUpdateUserProfile,
        getUsers
    };

    return <AuthContext.Provider value={values}><>{children}</></AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
