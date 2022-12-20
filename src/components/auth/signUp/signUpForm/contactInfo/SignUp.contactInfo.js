import { Box, Grid, TextField, Typography } from '@mui/material';
import { styles } from '../../../auth.styles';

export default function SignUpContactInfo() {
  return (
    <>
      <Box>
        <Typography sx={styles.formTypography}>Contact information</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>First name*</Typography>
          <TextField sx={styles.textField} id="outlined" placeholder="John" fullWidth />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Last name*</Typography>
          <TextField sx={styles.textField} id="outlined" placeholder="Doe" fullWidth />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Email*</Typography>
          <TextField
            sx={styles.textField}
            id="outlined"
            placeholder="johndoe@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Confirm your email*</Typography>
          <TextField
            sx={styles.textField}
            id="outlined"
            placeholder="johndoe@gmail.com"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Legal entity type*</Typography>
          <TextField
            sx={[styles.textField, styles.textFieldSelect]}
            id="outlined-select-currency"
            select
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>Company name</Typography>
          <TextField sx={styles.textField} id="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sx={styles.textFieldBox}>
          <Typography sx={styles.marginBottom25px}>
            Website/social media of your company*
          </Typography>
          <TextField sx={styles.textField} id="outlined" placeholder="name.com" fullWidth />
        </Grid>
      </Grid>
    </>
  );
}
