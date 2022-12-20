import { Grid, Typography, Box } from "@mui/material";

export default function Description() {
    return (
        <Grid container
            sx={{
                color: 'white',
                textAlign: 'start',
                paddingTop: '85px',
                paddingLeft: '55px',
            }}>
            <Grid item xs={12}>
                <Box sx={{ paddingBottom: '70px' }}>
                    <Typography
                        sx={{
                            fontSize: '70px',
                            fontStyle: 'Bold',
                            lineHeight: '104px',
                        }}>
                        OUR GOAL
                    </Typography>
                </Box>
                <Box sx={{ paddingBottom: '335px' }}>
                    <Typography
                        sx={{
                            fontSize: '40px',
                            fontWeight: '400',
                            lineHeight: '53px',
                            textTransform: 'uppercase'
                        }}>
                        Is To deliver best performance<br />
                        in the dating vertical
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: '16px',
                            fontStyle: 'Bold',
                            lineHeight: '23px',
                        }}>
                        We use the combined experience and knowledge gained over the 20+ years in the affiliate <br />
                        marketing industry. We believe our hyper specialized and focused approach will yield you,<br />
                        our partners, the best results for your hard earned traffic.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}