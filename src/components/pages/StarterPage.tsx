import { Box, Container, Grid } from "@mui/material";
import AppBar from "./organisms/AppBar";
import MainPage from "./organisms/atoms/MainPage";

const StarterPage = () => {
    return (
    <Box>
        <AppBar/>
        <Container>
            <Grid container>
                <Grid item xs={12}><MainPage/></Grid>
            </Grid>
        </Container>
    </Box>
    )
}

export default StarterPage;