import { Grid, Typography, Box } from '@mui/material';
import { styles } from '../ourGoal.styles';

export default function Description() {
  return (
    <Grid container sx={styles.descriptionContainer}>
      <Grid item xs={12} sx={styles.descriptionItem}>
        <Box>
          <Typography variant="h1">OUR GOAL</Typography>
        </Box>
        <Box>
          <Typography variant="h3">
            Is To deliver best performance
            <br />
            in the dating vertical
          </Typography>
        </Box>
        <Box sx={styles.marginBottom25px}>
          <Typography variant="h5">
            We use the combined experience and knowledge gained over the 20+ years in the affiliate{' '}
            <br />
            marketing industry. We believe our hyper specialized and focused approach will yield
            you,
            <br />
            our partners, the best results for your hard earned traffic.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
