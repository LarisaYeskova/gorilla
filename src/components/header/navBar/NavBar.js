import { Button, Grid, Box, Link } from '@mui/material';

export default function NavBar({ setIsOpen }) {
    return (
        <>
            <Grid container >
                <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            marginRight: '120px',
                        }}
                    >
                        <Link
                            sx={{
                                ':hover': {
                                    borderBottom: '1px solid #0C0C0C',
                                },
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                lineHeight: '17px',
                                color: '#0C0C0C',
                                textDecoration: 'none',
                            }}
                        >
                            Our goal
                        </Link>
                    </Box>
                    <Box sx={{ marginRight: '100px', textTransform: 'uppercase' }}>
                        <Link
                            sx={{
                                ':hover': {
                                    borderBottom: '1px solid #0C0C0C',
                                },
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                lineHeight: '17px',
                                color: '#0C0C0C',
                                textDecoration: 'none',
                            }}
                        >
                            Why us
                        </Link>
                    </Box>
                    <Box sx={{ marginRight: '120px', textTransform: 'uppercase' }}>
                        <Link
                            sx={{
                                ':hover': {
                                    borderBottom: '1px solid #0C0C0C',
                                },
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                lineHeight: '17px',
                                color: '#0C0C0C',
                                textDecoration: 'none',
                            }}
                        >
                            Payment methods
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '120px', textTransform: 'uppercase' }}>
                        <Link
                            sx={{
                                ':hover': {
                                    borderBottom: '1px solid #0C0C0C',
                                },
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontSize: '13px',
                                lineHeight: '17px',
                                color: '#0C0C0C',
                                textDecoration: 'none',
                            }}
                        >
                            Contact
                        </Link>
                    </Box>
                    <Box>
                        <Button
                            onClick={(prev) => setIsOpen({ ...prev, signUp: true })}
                            sx={{
                                backgroundImage: `url(https://celes.club/uploads/posts/2022-05/1653577268_73-celes-club-p-fon-dlya-saita-besshovnii-temnii-krasivie-75.jpg)`,
                                textTransform: 'uppercase',
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#FFFFFF',
                                textDecoration: 'none',
                                padding: '15px 35px',
                                borderRadius: '0px',
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
