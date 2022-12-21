import { Box, Button, Grid, Typography } from '@mui/material';

export default function InfoAuth({ setIsOpen }) {
    return (
        <>
            <Grid container sx={{ textAlign: 'start', minHeight: '500px', padding: '40px 35px' }}>
                <Grid
                    item
                    xs={12}
                    sx={{
                        paddingLeft: '55px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '40px',
                                lineHeight: '59px',
                                fontWeight: '400',
                                color: '#0C0C0C',
                            }}
                        >
                            Specialists in Dating <br />
                            Monetization
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <Button
                            fullWidth
                            onClick={(prev) => setIsOpen({ ...prev, signUp: true })}
                            sx={{
                                backgroundImage: `url(https://celes.club/uploads/posts/2022-05/1653577268_73-celes-club-p-fon-dlya-saita-besshovnii-temnii-krasivie-75.jpg)`,
                                color: 'white',
                                borderRadius: '0px',
                                minHeight: '140px',
                                fontSize: '24px',
                                lineHeight: '36px',
                            }}
                        >
                            Sign Up
                        </Button>
                        <Button
                            fullWidth
                            onClick={(prev) => setIsOpen({ ...prev, signIn: true })}
                            sx={{
                                color: '#0C0C0C',
                                borderRadius: '0px',
                                border: '1px solid #0C0C0C',
                                minHeight: '140px',
                                fontSize: '24px',
                                lineHeight: '36px',
                            }}
                        >
                            Sign in
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
