import { Box, Button, Grid, Typography } from '@mui/material';
import PayPal from '../../../assets/img/payPal.svg';
import Transfer from '../../../assets/img/wireTransfer.svg';
import { styles } from '../footer.styles';

export default function PaymentMethods({ setIsOpen }) {
  return (
    <>
      <Grid container sx={styles.paymentContainer}>
        <Grid item xs={12}>
          <Box sx={styles.paymentBox}>
            <Box>
              <Typography variant="h2">Payment Methods</Typography>
            </Box>
            <Box sx={[styles.alignItemsCenter, styles.flex]}>
              <Box sx={styles.marginRight15px}>
                <Button sx={styles.paymentButton}>
                  <img src={Transfer} alt="Transfer"></img>
                </Button>
              </Box>
              <Box>
                <Button sx={styles.paymentButton}>
                  <img src={PayPal} alt="PayPal"></img>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant="h4">
              Join Gorilla Cash and receive optimum results for your <br />
              dating traffic.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box sx={styles.flex}>
            <Button
              fullWidth
              onClick={(prev) => setIsOpen({ ...prev, signUp: true })}
              sx={styles.paymentButtonAuth}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              onClick={(prev) => setIsOpen({ ...prev, signIn: true })}
              sx={styles.paymentButtonAuthWhite}
            >
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
