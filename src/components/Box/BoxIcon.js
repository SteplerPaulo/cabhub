
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



export default function BoxIcon(props) {
  const { title, description } = props
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        p: 1,
        m: 1,
      }}
    >
      <Box sx={{ p: 1, pt: 1 }} >
        <Avatar sx={{ bgcolor: "#ffc71a", align: 'right' }} aria-label="recipe" component="span">
          <props.icon sx={{ color: "common.black" }} />
        </Avatar>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography color='primary' fontWeight='bold'>{title}</Typography>
        <Typography align='justify' sx={{ fontSize: '13px' }}>
          {description}
        </Typography>

      </Box>
    </Box>

  );
}
