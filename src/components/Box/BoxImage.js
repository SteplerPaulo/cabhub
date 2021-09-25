import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function BoxImage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    const top = (matches) ? '60vh' : '85vh';
    const width = (matches) ? '50vw' : '100vw';


    return (
        <Box component='img' src="/taxi-standard.png" alt="taxi"
            sx={{
                width: width,
                position: 'absolute',
                top: top,
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        />

    )
}
