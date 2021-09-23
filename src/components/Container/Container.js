import Grid from '@mui/material/Grid';

export default function Container(props) {
    const { backgroundColor, color } = props;
    console.log(props)
    return (
        <Grid container spacing={2} style={{ color:  color , backgroundColor: backgroundColor , paddingTop: '100px',paddingBottom: '100px' }} >
            
        </Grid>
    );
}