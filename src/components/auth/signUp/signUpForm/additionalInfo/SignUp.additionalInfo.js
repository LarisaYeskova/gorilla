import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { styles } from '../../../auth.styles';
export default function SignUpAddInfo() {
  return (
    <>
      <Box>
        <Typography sx={styles.formTypography}>Additional information</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={styles.textFieldBox}>
          <Typography sx={styles.textFieldTypography}>
            Describe the sites and methods you`ve used to advertise
          </Typography>
          <TextField
            sx={styles.textField}
            id="outlined"
            rows={4}
            multiline
            placeholder="Type here everything that can be useful"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sx={styles.textFieldBox}>
          <Button fullWidth sx={styles.authButton}>
            SIGN UP
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
