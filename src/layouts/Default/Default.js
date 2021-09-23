//import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import Booking from "components/Forms/Booking";


import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  root: {
    flexGrow: 1,
  },

  palette: {
    type: 'light',
    primary: {
      main: '#ffc71a',
    },
    secondary: {
      main: '#000000',
    },
    white: {
      main: '#ffffff',
    }
  },
});
/*
const styles = {
  paperContainer: {
    height: 1356,
    backgroundImage: `url(${"/background.png"})`
  }
};
*/



function DefaultLayout() {


  return (
    <ThemeProvider theme={theme}>


      <Grid container spacing={2}
        pr={6}
        color="light"
        sx={{
          backgroundImage: `url(${"/background.png"})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no - repeat',
          backgroundPosition: 'center center'
        }}
      >

    

        <Box
          component='img'
          src="/taxi.png" alt="taxi"
          sx={{
            width: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}

        />


        <Grid item md={6} xs={12} >
          <img src="/cabhub.png" alt='logo' />
        </Grid>

        <Grid
          item
          md={6} xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Stack spacing={2} direction="row">
            <Button variant="contained">HOME</Button>
            <Button variant="text" color="white">ABOUT</Button>
            <Button variant="text" color="white">FEATURES</Button>
            <Button variant="text" color="white">BLOG</Button>
            <Button variant="text" color="white">ORDER NOW</Button>
            <Button variant="text" color="white" px={4}>CONTACTS</Button>
          </Stack>

        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" style={{ color: '#ffc71a' }} >
              BOOK CAB NOW!
            </Typography>
            <Typography variant="h3" component="h2" style={{ color: 'white' }}>
              +123 4567 8900
            </Typography>
            <Typography variant="div" component="div" style={{ color: 'white' }}>
              WWW.CABHUB.COM
            </Typography>



          </Box>


        </Grid>
      </Grid>

      <Grid container spacing={2} style={{ backgroundColor: '#ffc71a', padding: 100 }}>
        <Grid item md={7} xs={12} pr={1}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h6" component="div">
              BEST IN CITY
            </Typography>
            <Typography variant="h4" component="div">
              TRUSTED CAB SERVICE
            </Typography>
            <Typography variant="h5" component="div">
              IN NATIONAL CAPITAL REGION
            </Typography>
            <Typography variant="p" component="p" pt={2} pb={2}>
              Nostrum ipsam tellus nisl, vel elit eligendi, arcu consectetur praesent aliquet atque praesentium necessitatibus repellat ipsam wisi quae! Montes natoque! Iusto per! Porta ridiculus ut eu gravida numquam mollit integer vestibulum sem. Iusto etiam sapiente et, ab nulla beatae, et eleifend eleifend quae mauris? Netus facilisis? Praesentium cumque, expedita convallis quam voluptatibus fuga, quos, anim minima, magnis, per lectus justo, convallis urna, vel! Aute hymenaeos ornare magnam doloribus, sed vero dictumst, incidunt, error ullam, adipisci ullamco? Eros vehicula, venenatis maecenas, minim aliquid mollit taciti. Dolorem officiis hac soluta? Erat ut. Inventore? Ipsa. Quos, inventore tenetur tempus, auctor, congue, suscipit veritatis.
            </Typography>
            <Button variant="contained" color="secondary">READ MORE</Button>
          </Box>
        </Grid>
        <Grid item md={5} xs={12}>

          <Booking />
        </Grid>

      </Grid>


      <Grid container spacing={2} style={{ color: 'white', backgroundColor: '#fffff', padding: 200 }}>

      </Grid>
      <Grid container spacing={2} style={{ color: 'white', backgroundColor: '#0d0d0d', padding: 200 }}>

      </Grid>

    </ThemeProvider >
  );


}

export default DefaultLayout;