
import Grid from "@mui/material/Grid";
import Card from "components/Card/MediaCard";

import Typography from "@mui/material/Typography";



export default function Container(props) {
    const { backgroundColor, color, pricing } = props;
    console.log(pricing)


    return (

        <Grid container direction="row"
            justifyContent="center" alignItems="center" spacing={2}
            pl={{ "xs": 1, "md": 15 }}
            pr={{ "xs": 1, "md": 15 }}
            pb={5} pt={5}
            style={{
                color: color, backgroundColor: backgroundColor
            }}>


            <Grid item xs={12}>
                <Typography component="h2" variant="h5" color="primary" align="center" >OUR</Typography>
                <Typography component="h2" variant="h5" color="common.black" align="center" fontWeight="bold" >TARIFFS</Typography>
            </Grid>

            {pricing.map((item) => (
                <Grid item xs={6} md={3} key={item.id}>
                    <Card {...item} />
                </Grid>
            ))}

        </Grid>

    );
}