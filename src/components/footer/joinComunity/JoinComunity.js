import { Box, Grid } from '@mui/material';
import Join from '../../../assets/img/join.png';
import Facebook from '../../../assets/img/facebook.svg';
import Insta from '../../../assets/img/insta.svg';
import Stm from '../../../assets/img/stm.svg';
import Telegram from '../../../assets/img/telegram.svg';
import { styles } from '../footer.styles';

export default function JoinComunity() {
  return (
    <>
      <Grid container sx={[styles.relative, styles.joinContainer]}>
        <Grid item xs={12}>
          <Box sx={styles.joinBox}>
            <Box sx={styles.marginRight40px}>
              <img
                style={{
                  width: '100%',
                }}
                src={Join}
                alt="Join"
              ></img>
            </Box>
            <Box sx={styles.imgMediaBox}>
              <img
                style={{
                  width: '100%',
                }}
                src={Join}
                alt="Join"
              ></img>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={styles.joinImgContainer}>
          <Box sx={[styles.positionAbsolute, styles.joinTelegram]}>
            <img src={Telegram} alt="Telegram"></img>
          </Box>
          <Box sx={[styles.positionAbsolute, styles.joinFacebook]}>
            <img src={Facebook} alt="Facebook"></img>
          </Box>
          <Box sx={[styles.positionAbsolute, styles.joinInsta]}>
            <img src={Insta} alt="Insta"></img>
          </Box>
          <Box sx={[styles.positionAbsolute, styles.joinStm]}>
            <img src={Stm} alt="Stm"></img>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
