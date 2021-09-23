import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


export default function Booking() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title="BOOK A CAB" style={{ backgroundColor: '#000000', color: '#ffffff' }} />

      <CardContent >
        <Grid spacing={2} 
          container
          direction="row"
          justifyContent="center"
          alignItems="center">
          <Grid item xs={6}>
            <TextField id="standard-basic" label="Name" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" label="Phone" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" label="When" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" label="Time" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" label="Start" variant="standard" />
          </Grid>
          <Grid item xs={6}>
            <TextField id="standard-basic" label="End" variant="standard" />
          </Grid>
          <Grid item xs={12}>
            <TextField id="standard-basic" label="Choose Vehicle" variant="standard" fullWidth  />
          </Grid>
        </Grid>

      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="secondary" fullWidth>SUBMIT</Button>
      </CardActions>
    </Card>
  );
}
