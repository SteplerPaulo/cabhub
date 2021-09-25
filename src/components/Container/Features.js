import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import BoxIcon from "components/Box/BoxIcon";

import features from "fakedata/features";

export default function Footer() {
    return (

        <Grid container direction="row"
            pl={{ 'xs': 5, 'md': 25 }}
            pr={{ 'xs': 5, 'md': 25 }}
            pb={5} pt={5}
            style={{
                background: `url(${"/features.jpg"}) rgba(0, 0, 0, 0.90)`,
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            }}>

            <Grid item xs={12} pb={2}>
                <Typography component="h2" variant="h5" color="primary" align="center" >WE DO BEST</Typography>
                <Typography component="h2" variant="h5" color="common.white" align="center" fontWeight="bold" >THAN YOU WISH</Typography>
            </Grid>

            {features.map((feature) => (
                <Grid item xs={12} md={6} key={feature.id}>
                    <BoxIcon {...feature} />
                </Grid>
            ))}
        </Grid>

    )
}
