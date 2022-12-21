import { Box, Button, Grid, Typography } from '@mui/material';
import PayPal from '../../../assets/img/payPal.svg';
import Transfer from '../../../assets/img/wireTransfer.svg';

export default function PaymentMethods({ setIsOpen }) {
  return (
    <>
      <Grid
        container
        sx={{
          padding: '40px 60px',
          textAlign: 'start',
          minHeight: '770px',
          borderRight: '1px solid black',
        }}
      >
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: '208px',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '40px',
                  fontWeight: '400',
                  lineHeight: '59px',
                  textTransform: 'uppercase',
                }}
              >
                Payment Methods
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ marginRight: '15px', height: '100%' }}>
                <Button
                  sx={{
                    padding: '10px 25px',
                    height: '100%',
                    border: '1px solid #0C0C0C80',
                    borderRadius: '0px',
                  }}
                >
                  <img src={Transfer}></img>
                </Button>
              </Box>
              <Box>
                <Button
                  sx={{
                    // padding: '10px 25px',
                    border: '1px solid #0C0C0C80',
                    borderRadius: '0px',
                  }}
                >
                  <img src={PayPal}></img>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: '400',
                lineHeight: '31px',
              }}
            >
              Join Gorilla Cash and receive optimum results for your <br />
              dating traffic.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
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
