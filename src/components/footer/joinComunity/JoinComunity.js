import { Box, Grid, Typography } from '@mui/material';
import Join from '../../../assets/img/join.png';

export default function JoinComunity({ isOpen, closeModal, setIsOpen }) {
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            //   borderBottom: '1px solid #0C0C0C',
                            display: 'flex',
                            overflow: 'hidden',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ marginRight: '40px' }}>
                            <img src={Join}></img>
                        </Box>
                        <Box>
                            <img src={Join}></img>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}
                    sx={{
                        borderTop: '1px solid #0C0C0C',
                        overflow: 'hidden',
                        margin: '0px 25px'
                    }}
                >
                    <Box>12</Box>
                    <Box></Box>
                    <Box>2</Box>
                    <Box>3</Box>
                    <Box>4</Box>
                </Grid>
            </Grid>
        </>
    );
}
