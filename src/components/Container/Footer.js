import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';


import CustomDivider from "components/Customize/Divider";
import SocialMedia from "components/SocialMedia/SocialMedia";

import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import WebIcon from '@mui/icons-material/Web';



export default function Footer() {
    return (
        <Grid container justifyContent="center" columnSpacing={4} pl={{ 'xs': 5, 'md': 25 }} pr={{ 'xs': 5, 'md': 25 }} pb={5} pt={2}
            style={{
                backgroundColor: 'black',
                backgroundSize: 'cover',
            }}>
            <Grid item alignItems="center" xs={12} md={3} pt={{ 'xs': 5 }}>
                <Typography variant="div" component="div" color="common.white" fontWeight='bold' >
                    ABOUT CAB HUB
                </Typography>
                <CustomDivider />
                <Typography variant="caption" component="div" color="common.white" align='justify'>
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </Typography>
                <SocialMedia />
            </Grid>
            <Grid item alignItems="center" xs={12} md={3} pt={{ 'xs': 5 }}>
                <Typography variant="div" component="div" color="common.white" fontWeight='bold' >
                    DOWNLOAD
                </Typography>
                <CustomDivider />
                <Typography variant="caption" component="div" color="common.white" align='justify'>

                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

                </Typography>

                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <Typography >Android Users</Typography>
                    <AndroidIcon sx={{color:'common.white'}}/>
                </Stack>
                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <Typography  >IOS Users</Typography>
                    <AppleIcon sx={{color:'common.white'}}/>
                </Stack>




            </Grid>
            <Grid item alignItems="center" xs={12} md={3} pt={{ 'xs': 5 }}>
                <Typography variant="div" component="div" color="common.white" fontWeight='bold' >
                    CONTACT
                </Typography>
                <CustomDivider />
                <Typography variant="caption" component="div" color="common.white" align='justify' >

                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.

                </Typography>

                
                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <LocationOnIcon sx={{color:'common.white'}}/>
                    <Typography  color="common.white">Mandaluyong City Philippines</Typography>
                </Stack>
                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <PhoneAndroidIcon sx={{color:'common.white'}}/>
                    <Typography  color="common.white">+ 123 456 78900</Typography>
                </Stack>
                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <EmailIcon sx={{color:'common.white'}}/>
                    <Typography  color="common.white">inquiry@cabhub.com</Typography>
                </Stack>
                <Stack pt={1} direction="row" spacing={2} alignItems="center">
                    <WebIcon sx={{color:'common.white'}}/>
                    <Typography  color="common.white">www.cabhub.com</Typography>
                </Stack>



            </Grid>
        </Grid >
    )
}
