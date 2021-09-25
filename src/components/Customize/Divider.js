import Divider from '@mui/material/Divider';

//import { useTheme } from '@mui/material/styles';

const style = {
    borderBottom: '5px solid #ffc71a',
    paddingTop: '15px',
    marginBottom: '15px',
};


export default function CustomDivider(props) {
    //const theme = useTheme();
   // console.log(theme.palette.primary)

    return (
        <Divider sx={ style } />
    )
}
