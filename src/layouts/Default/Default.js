//import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';




import Booking from "components/Forms/Booking";
import BoxImage from "components/Box/BoxImage";
import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";

import Features from "components/Container/Features";
import DownloadApp from "components/Container/DownloadApp";
import Testimonials from "components/Container/Testimonials";
import CallToAction from "components/Container/CallToAction";
import Footer from "components/Container/Footer";



import pricing from "fakedata/pricing";




import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ffc71a',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#ffc71a',
      secondary: '#000000'
    }
  },
});


function DefaultLayout() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BoxImage />


      <Grid container
        style={{
          paddingBottom: 250,
          background: `url(${"/background.png"}) rgba(0, 0, 0, 0.70)`,
          backgroundBlendMode: 'multiply',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom center'
        }}>
          
        <Navigation />


        <Grid item container direction="row" justifyContent="center" alignItems="center" xs={12} pt={2} >
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h5" component="h1" color="primary" sx={{ fontWeight: 'bold' }}>
              BOOK CAB NOW!
            </Typography>
            <Typography variant="h3" component="h2" color="common.white" sx={{ fontWeight: 'bold' }}>
              + 123 4567 8900
            </Typography>
            <Typography variant="div" component="div" color="common.white" sx={{ letterSpacing: 10 }}>
              WWW.CABHUB.COM
            </Typography>
          </Box>
        </Grid>

      </Grid>




      <Grid container style={{ backgroundColor: '#ffc71a' }} p={{ xs: 4, md: 15 }} >
        <Grid item md={6} xs={12} pb={2} color="text.secondary">
          <Typography variant="h6" component="div">
            BEST IN CITY
          </Typography>
          <Typography variant="h4" component="div">
            TRUSTED CAB SERVICE
          </Typography>
          <Typography variant="h5" component="div">
            IN NATIONAL CAPITAL REGION
          </Typography>
          <Typography variant="p" component="p" pt={2} pb={2} align='justify'>
            Nostrum ipsam tellus nisl, vel elit eligendi, arcu consectetur praesent aliquet atque praesentium necessitatibus repellat ipsam wisi quae! Montes natoque! Iusto per! Porta ridiculus ut eu gravida numquam mollit integer vestibulum sem. Iusto etiam sapiente et, ab nulla beatae, et eleifend eleifend quae mauris? Netus facilisis? Praesentium cumque, expedita convallis quam voluptatibus fuga, quos, anim minima, magnis, per lectus justo, convallis urna, vel! Aute hymenaeos ornare magnam doloribus, sed vero dictumst, incidunt, error ullam, adipisci ullamco? Eros vehicula, venenatis maecenas, minim aliquid mollit taciti. Dolorem officiis hac soluta? Erat ut. Inventore? Ipsa. Quos, inventore tenetur tempus, auctor, congue, suscipit veritatis.
          </Typography>
          <Button variant="contained" color="secondary">READ MORE</Button>

        </Grid>
        <Grid item md={6} xs={12} container direction="row" justifyContent="center" alignItems="center">
          <Booking />
        </Grid>

      </Grid>


      <Container  {...{ color: 'black', backgroundColor: 'white', pricing }} />

      <Features />
      <DownloadApp />
      <Testimonials />
      <CallToAction />
      <Footer />

    </ThemeProvider >
  );


}

export default DefaultLayout;