import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import PlaystoreButton from "components/Button/PlaystoreButton";
import AppstoreButton from "components/Button/AppstoreButton";

export default function DownloadApp() {
    return (
        <Grid container direction="row"
            alignItems="center"spacing={2}
            pl={{ "xs": 5, "md": 35 }}
            pr={{ "xs": 5, "md": 35 }}
            pb={5} pt={5}
            style={{
                background: `url(${"/phone.png"})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'right bottom'
            }}>

            <Grid item xs={12}>
                <Typography component="div" variant="h5" align="center" color="primary">DOWNLOAD</Typography>
                <Typography component="div" variant="h5" align="center" color="common.black">BEST CAB SERVICE</Typography>
            </Grid>

            <Grid item xs={12} md={6} pt={5}>
                <Typography component="div" variant="subtitle2" color="common.black">Download the Cab voucher app free!</Typography>
                <Typography component="div" variant="subtitle2" color="common.black">Get Exciting New Offers</Typography>
                <Typography component="div" variant="caption" color="common.black" align='justify'>Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.</Typography>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} pt={2}>
                    <PlaystoreButton />
                    <AppstoreButton />
                </Stack>
            </Grid>
        </Grid>
    )
}

