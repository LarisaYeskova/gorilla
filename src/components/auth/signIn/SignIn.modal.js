import { Button, Grid, Modal, Box, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SignInForm from './signInForm/signInForm';
import { styles } from '../auth.styles';

export default function SignIn({ isOpen, setIsOpen, closeModal }) {
  return (
    <Modal sx={styles.modalContainer} open={isOpen}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={styles.authCloseIconBox}>
            <Button sx={styles.authCloseIconButton} onClick={closeModal}>
              <CloseIcon sx={styles.authCloseIcon} />
            </Button>
          </Box>
          <Box sx={styles.textAlignCenter}>
            <Box sx={styles.marginBottom25px}>
              <Typography sx={styles.authTitle}>Sign In</Typography>
            </Box>
            <Box sx={styles.marginBottom60px}>
              <Typography sx={styles.authInfoAccTypography}>
                Don’t have an account?{' '}
                <Link
                  sx={styles.link}
                  onClick={() => {
                    setIsOpen((prev) => ({ ...prev, signUp: true }));
                  }}
                >
                  Create one here
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.authFormContainer}>
            <SignInForm />
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}
