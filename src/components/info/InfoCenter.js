import { Box, Grid } from '@mui/material';
import Info from './info/Info';
import InfoAuth from './infoAuth/InfoAuth';
import { styles } from './infoCenter.styles';

export default function InfoCenter({ setIsOpen }) {
  return (
    <Box sx={styles.infoCenterBox}>
      <Grid container columns={{ xs: 4, md: 12 }} sx={styles.infoCenterContainer}>
        <Grid item xs={6} sx={styles.infoCenterItem}>
          <Info />
        </Grid>
        <Grid item xs={6} sx={styles.infoBox}>
          <InfoAuth setIsOpen={setIsOpen} />
        </Grid>
      </Grid>
    </Box>
  );
}
