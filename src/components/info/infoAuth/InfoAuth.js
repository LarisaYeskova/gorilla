import { Box, Button, Grid, Typography } from '@mui/material';
import Heart from '../../../assets/img/heart.svg';
import Money from '../../../assets/img/money.svg';
import Toon from '../../../assets/img/toonIcon.svg';
import { styles } from '../infoCenter.styles';

export default function InfoAuth({ setIsOpen }) {
  return (
    <>
      <Grid container sx={[styles.infoContainer, styles.relative]}>
        <Grid item xs={12} sx={styles.infoAuthItem}>
          <Box>
            <Typography variant="h2">
              Specialists in Dating <br />
              Monetization
            </Typography>
          </Box>
          <Box sx={styles.ImgMediaBox}>
            <Box sx={[styles.positionAbsolute, styles.infoHeart]}>
              <img src={Heart} alt="Heart"></img>
            </Box>
            <Box sx={[styles.positionAbsolute, styles.infoMoney]}>
              <img src={Money} alt="Money"></img>
            </Box>
            <Box sx={[styles.positionAbsolute, styles.infoToon]}>
              <img src={Toon} alt="Toon"></img>
            </Box>
            <Box sx={[styles.positionAbsolute, styles.infoHeartDublicate]}>
              <img src={Heart} alt="Heart"></img>
            </Box>
          </Box>
          <Box sx={styles.flex}>
            <Button
              fullWidth
              onClick={(prev) => setIsOpen({ ...prev, signUp: true })}
              sx={styles.infoAuthButton}
            >
              Sign Up
            </Button>
            <Button
              fullWidth
              onClick={(prev) => setIsOpen({ ...prev, signIn: true })}
              sx={styles.infoAuthButtonWhite}
            >
              Sign in
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
