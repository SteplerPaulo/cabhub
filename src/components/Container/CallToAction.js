import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function CallToAction() {
    return (
        <Grid container justifyContent="center" alignItems="center"
            style={{
                backgroundColor: '#ffc71a',
                backgroundSize: 'cover',
                backgroundRepeat: 'no - repeat',
                backgroundPosition: 'center top'
            }}>
            <Grid item sx={{ textAlign: 'center' }} pt={5} pb={5}>
                <Typography variant="h5" component="h1" color="common.black" fontWeight='bold' >
                    BOOK CAB NOW!
                </Typography>
                <Typography variant="h3" component="h2" color="common.black" fontWeight='bold' >
                    + 123 4567 8900
                </Typography>
            </Grid>
        </Grid >
    )
}
