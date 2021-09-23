import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Navigation() {
    return (
        <Grid container>
            <Grid item md={6} xs={12} pl={5} justifyContent="center" alignItems="center">
                <Box component='img' src="/cabhub.png" alt='logo' />
            </Grid>

            <Grid item md={6} xs={12} container direction="row" justifyContent="center" alignItems="center">
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Button variant="contained">HOME</Button>
                    <Button variant="text" sx={{ color: 'white' }}>ABOUT</Button>
                    <Button variant="text" sx={{ color: 'white' }}>FEATURES</Button>
                    <Button variant="text" sx={{ color: 'white' }}>BLOG</Button>
                    <Button variant="text" sx={{ color: 'white' }}>ORDER NOW</Button>
                    <Button variant="text" sx={{ color: 'white' }} px={4}>CONTACTS</Button>
                </Stack>
            </Grid>
        </Grid>


    )
}
