import { Box, Grid, TextField, Typography } from '@mui/material';
import { styles } from '../../../auth.styles';

export default function SignUpMailingAdress() {
  return (
    <>
      <Box>
        <Typography sx={styles.formTypography}>Mailing Address</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Address Line 1*</Typography>
          <TextField sx={styles.textField} id="outlined" placeholder="John" fullWidth maxRows={4} />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Address Line 2*</Typography>
          <TextField sx={styles.textField} id="outlined" placeholder="Doe" fullWidth />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>City*</Typography>
          <TextField
            sx={styles.textField}
            id="outlined"
            placeholder="johndoe@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>ZIP/Postal code*</Typography>
          <TextField
            sx={styles.textField}
            id="outlined"
            placeholder="johndoe@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Country*</Typography>
          <TextField
            sx={[styles.textField, styles.textFieldSelect]}
            id="outlined-select-currency"
            select
            placeholder="Select your type"
            fullWidth
          />
        </Grid>
      </Grid>
    </>
  );
}
