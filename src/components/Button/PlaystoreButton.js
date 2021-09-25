import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function PlaystoreButton() {
    return (
        <Button variant="contained" color="secondary" startIcon={<img src={'/playstore.logo.png'} alt='Playstore' />}>
            <Stack>
                <Typography component="div" variant="caption" >ANDROID APP ON</Typography>
                <Typography component="div" variant="div" >Google Play</Typography>
            </Stack>
        </Button>
    );
}