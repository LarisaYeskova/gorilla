import { Box, Grid, Link, Typography } from '@mui/material';
import JoinComunity from './joinComunity/JoinComunity';
import PaymentMethods from './paymentMethods/PaymentMethods';
import SmallToon from '../../assets/img/smallToon.svg';
import Three from '../../assets/img/three.svg';
import { styles } from './footer.styles';

export default function Footer({ isOpen, closeModal, setIsOpen }) {
  const handlerScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Grid container sx={styles.footerContainer} columns={{ xs: 4, md: 12 }}>
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
        <Grid item xs={12} sx={styles.footerItem}>
          <Box sx={styles.footerBox}>
            <Box sx={[styles.flex, styles.alignItemsCenter]}>
              <Box sx={styles.marginRight15px}>
                <img src={SmallToon} alt="SmallToon"></img>
              </Box>
              <Box>
                <Typography variant="h6">©2022 GORILLA CASH</Typography>
              </Box>
            </Box>
            <Box>
              <Link onClick={handlerScrollToTop}>BACK TO TOP ↑</Link>
            </Box>
            <Box sx={[styles.flex, styles.alignItemsCenter]}>
              <Box sx={styles.marginRight15px}>
                <img src={Three} alt="Three"></img>
              </Box>
              <Box>
                <Typography variant="h6">Designed by PineDev Studio</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
