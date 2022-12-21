import { Box, Button, Grid, Typography } from '@mui/material';
import Info from './info/Info';
import InfoAuth from './infoAuth/InfoAuth';

export default function InfoCenter({ setIsOpen }) {
    return (
        <Box sx={{ borderTop: '1px solid black', margin: '0px 25px' }}>
            <Grid container sx={{ textAlign: 'start', minHeight: '500px', }}>
                <Grid
                    item
                    xs={6}
                    sx={{
                        borderRight: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Info />
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <InfoAuth setIsOpen={setIsOpen} />
                </Grid>
            </Grid>
        </Box>
    );
}
