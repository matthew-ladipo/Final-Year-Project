import { useLocation, Outlet, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";
import { useContext } from "react";

export const Protected =() => {
    const {auth} = useContext(AuthContext)
    const location = useLocation()
    if(!auth){
        return <Navigate to='/' replace state={{path: location.pathname}} />
    }
    return <Outlet />
}