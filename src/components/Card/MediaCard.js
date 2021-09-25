
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    const { title , description, img, price} = props
    return (
        <Card sx={{ maxWidth: 345, textAlign: 'center' }}>
            <CardMedia
                component="img"
                image={img}
                alt="Taxi"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h5" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    {price}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button variant="contained" color="primary" >READ MORE</Button>
            </CardActions>
        </Card>
    );
}
