import { Box, Button, Grid, Typography } from '@mui/material';

export default function Info() {
    return (
        <>
            <Grid container sx={{ textAlign: 'start', minHeight: '500px', padding: '40px 35px' }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        // borderRight: '1px solid black',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '24px',
                            fontWeight: '400',
                            lineHeight: '31px',
                            color: '#0C0C0C',
                        }}
                    >
                        We provide cutting edge dating products and sales <br />
                        funnels designed to deliver the best possible conversion <br />
                        rates for our traffic partners.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '40px',
                            lineHeight: '53px',
                            fontWeight: '400',
                            color: '#0C0C0C',
                        }}
                    >
                        Direct Advertiser <br />
                        CPA Network
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}
