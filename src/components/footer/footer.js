import { Box, Grid, Link, Typography } from '@mui/material';
import JoinComunity from './joinComunity/JoinComunity';
import PaymentMethods from './paymentMethods/PaymentMethods';
import SmallToon from '../../assets/img/smallToon.svg';
import Three from '../../assets/img/three.svg';

export default function Footer({ isOpen, closeModal, setIsOpen }) {
    return (
        <>
            <Grid container sx={{ color: '#0C0C0C' }}>
                <Grid item xs={6}>
                    <Box>
                        <PaymentMethods isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <JoinComunity />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ margin: '0px 25px', borderTop: '1px solid #0C0C0C' }}>
                    <Box
                        sx={{
                            padding: '40px 30px 50px',
                            justifyContent: 'space-between',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '15px' }}>
                                <img src={SmallToon}></img>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '18px',
                                        color: '#0C0C0C',
                                    }}
                                >
                                    ©2022 GORILLA CASH
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Link sx={{ color: '#0C0C0C', textDecoration: 'none', cursor: 'pointer' }}>
                                Back to top ↑
                            </Link>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box sx={{ marginRight: '15px' }}>
                                <img src={Three}></img>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        lineHeight: '18px',
                                        color: '#0C0C0C',
                                    }}
                                >
                                    Designed by PineDev Studio
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
