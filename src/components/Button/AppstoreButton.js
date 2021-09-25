import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function AppstoreButton() {
    return (
        <Button variant="contained" color="secondary" startIcon={<img src={'/appstore.logo.png'} alt='Appstore' />}>
            <Stack>
                <Typography component="div" variant="caption" >Download on the</Typography>
                <Typography component="div" variant="div">App Store</Typography>
            </Stack>
        </Button>
    );
}