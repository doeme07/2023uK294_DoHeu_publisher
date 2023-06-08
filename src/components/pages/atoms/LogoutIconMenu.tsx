import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const AddIconCustom = () => {
    const navigate = useNavigate();
    
    const HandleLogout = () => {
        localStorage.setItem("accessToken", "");
        navigate("/", {replace : true})
    }
    return (
        <LogoutIcon
                  onClick={HandleLogout}
                  sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
                />
                
    )
}

export default AddIconCustom;