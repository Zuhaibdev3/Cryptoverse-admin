import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/loader";

const AuthGuard = () => {
    const {
        user,
        loading
    } = useAuth(null);

    console.log(loading, "loading")

    if (loading === "pending" || loading === "idle") return <Loader />;

    if (!user) return <Navigate to="/signin" replace />

    return <Outlet></Outlet>;
};

export default AuthGuard;
