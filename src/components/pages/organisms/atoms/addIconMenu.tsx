import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const AddIconCustom = () => {
    const navigate = useNavigate();
    
    return (
        <AddIcon
                  onClick={() => navigate("add", {replace : true})}
                  sx={{ "&:hover": { color: "#1976d2", cursor: "pointer" } }}
                />
    )
}

export default AddIconCustom;