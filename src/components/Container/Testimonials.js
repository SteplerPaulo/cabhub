import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import testimonials from "fakedata/testimonials";

export default function Testimonials() {
    return (
        <Grid container justifyContent="center" alignItems="center" pl={{'xs':3,'md':30}} pr={{'xs':3,'md':30}}
            style={{
                background: `url(${"/testimonials.jpg"}) rgba(0, 0, 0, 0.85)`,
                backgroundBlendMode: 'multiply',
                backgroundSize: 'cover',
                backgroundRepeat: 'no - repeat',
                backgroundPosition: 'center top'
            }}>
            <Grid item xs={12} pt={5} >
                <Typography component="div" variant="h5" align="center" color="primary">HAPPY CLIENTS'</Typography>
                <Typography component="div" variant="h5" align="center" color="common.white">TESTIMONIALS</Typography>
            </Grid>
            {testimonials.map((testi) => (
                <Grid item xs={12} md={6} key={testi.id} p={{'xs':2,'md':5}} >
                    <Stack
                        pt={2} pb={2}
                        pr={3} pl={3}
                        sx={{
                            backgroundColor: 'common.black',
                            borderRadius: '25px',
                            display: 'flex',
                            flexDirection: 'col',
                        }}
                    >
                        <Typography align='justify' color="common.white" sx={{ fontSize: '12px' }}>
                            {testi.description}
                        </Typography>
                        <Stack pt={1} direction="row" spacing={2}  alignItems="center">
                            <Avatar alt="Portrait" src={testi.img} />
                            <Stack>
                                <Typography color='primary' fontWeight='bold'>{testi.name}</Typography>
                                <Typography color='common.white' >{testi.title}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}