import { Button, Grid, Modal, Box, Typography, Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SignUpForm from './signUpForm/SIgnUp.form';
import { styles } from '../auth.styles';

export default function SignUp({ isOpen, setIsOpen, closeModal }) {
  return (
    <Modal sx={[styles.modalContainer, styles.modalContainerOverflow]} open={isOpen}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={styles.authCloseIconBox}>
            <Button sx={styles.authCloseIconButton} onClick={closeModal}>
              <CloseIcon sx={styles.authCloseIcon} />
            </Button>
          </Box>
          <Box sx={styles.textAlignCenter}>
            <Box sx={styles.marginBottom25px}>
              <Typography sx={styles.authTitle}>Sign Up</Typography>
            </Box>
            <Box sx={styles.marginBottom60px}>
              <Typography sx={styles.authInfoAccTypography}>
                Already have an account?
                <Link
                  sx={styles.link}
                  onClick={() => {
                    setIsOpen((prev) => ({ ...prev, signIn: true }));
                  }}
                >
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box sx={styles.authFormContainer}>
            <SignUpForm />
          </Box>
        </Grid>
      </Grid>
    </Modal>
  );
}
