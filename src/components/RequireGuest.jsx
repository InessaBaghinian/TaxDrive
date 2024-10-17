import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";


const RequireGuest = ({children})=>{
    const token =Cookies.get('my-token')
    
    if(token) return  <Navigate to="/" />

    return  children
}

export default RequireGuest


