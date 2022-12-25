import { Grid, Typography } from '@mui/material';
import { styles } from '../infoCenter.styles';

export default function Info() {
  return (
    <>
      <Grid container sx={styles.infoContainer}>
        <Grid item xs={12} sx={styles.infoBox}>
          <Typography variant="h4">
            We provide cutting edge dating products and sales <br />
            funnels designed to deliver the best possible conversion <br />
            rates for our traffic partners.
          </Typography>
          <Typography variant="h3">
            Direct Advertiser <br />
            CPA Network
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
