
import '../../App.css';
import { Box, Container, Grid} from '@mui/material';
import RandomCatForm from './organisms/atoms/RandomCatForm';
import RandomCatList from './organisms/atoms/RandomCatList';
import AppBar from './organisms/AppBar';


function App() {
  return (
    <Box>
      <AppBar/>
      <Container>
        
        <Grid container>
          <Grid item xs={12}><RandomCatForm/></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}><RandomCatList/></Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
