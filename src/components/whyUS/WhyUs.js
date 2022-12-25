import { Grid, Typography, Box } from '@mui/material';
import Group from '../../assets/img/group.png';
import Toon from '../../assets/img/bigToon.svg';
import { styles } from './whyUs.styles';

export default function WhyUs() {
  return (
    <Grid container sx={styles.whyUsContainer}>
      <Grid item xs={6} sx={styles.whyUsItem}>
        <Typography variant="h1">WHY</Typography>
      </Grid>
      <Grid item xs={6} sx={styles.whyUsBox}>
        <Typography variant="h1">US</Typography>
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.margin30px0px}>
          <img src={Toon} alt="toon"></img>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={styles.whyUsBorder}></Box>
      </Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={styles.paddingBottom100px}>
          <img src={Group} alt="group"></img>
        </Box>
      </Grid>
    </Grid>
  );
}
