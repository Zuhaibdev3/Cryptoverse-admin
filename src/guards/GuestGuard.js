import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loader from "../components/loader";

const GuestGuard = () => {
    const {
        user,
        loading
    } = useAuth(null);

    if (loading === "pending" || loading === "idle") return <Loader />;

    if (user) return <Navigate to="/" replace />

    return <Outlet></Outlet>;
};

export default GuestGuard;
