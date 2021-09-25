import Grid from '@mui/material/Grid';

import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialMedia() {
    return (
        <Grid container justifyContent="left" alignItems="center" spacing={1}>
            <Grid item><FacebookIcon /></Grid>
            <Grid item> <GoogleIcon /></Grid>
            <Grid item> <TwitterIcon /></Grid>
            <Grid item> <InstagramIcon /></Grid>
        </Grid>

    )
}