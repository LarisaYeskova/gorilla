import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  InputAdornment,
  OutlinedInput,
  FormControl,
} from '@mui/material';
import { useState } from 'react';
import { styles } from '../../auth.styles';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Box sx={styles.minWidth}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={styles.textFieldBox}>
            <Typography sx={styles.textFieldTypography}>Email</Typography>
            <TextField sx={styles.textField} placeholder="Email" fullWidth />
          </Grid>
          <Grid item xs={12} sx={styles.textFieldBox}>
            <Typography sx={styles.textFieldTypography}>Password</Typography>
            <FormControl sx={styles.textField} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: 'white' }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <Box sx={[styles.marginBottom20px, styles.textAlignEnd]}>
          <Link sx={styles.link}>Forgot password?</Link>
        </Box>
        <Grid item xs={12} sx={styles.marginBottom60px}>
          <Button sx={styles.authButton} fullWidth>
            LOG IN
          </Button>
        </Grid>
        <Typography sx={styles.textAlignCenter}>
          Need help?
          <Link sx={styles.link}>Contact support</Link>
        </Typography>
      </Box>
    </>
  );
}
