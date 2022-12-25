import { Button, Grid, Box, Link } from '@mui/material';

import { styles } from '../header.styles';

export default function NavBar({ setIsOpen }) {
  return (
    <>
      <Grid container sx={styles.navBarMediaBox}>
        <Grid item xs={6} sx={styles.navBarBoxLink}>
          <Box sx={styles.marginRight120px}>
            <Link>OUR GOAL</Link>
          </Box>
          <Box sx={styles.marginRight100px}>
            <Link>WHY US</Link>
          </Box>
          <Box sx={styles.marginRight120px}>
            <Link>PAYMENT METHODS</Link>
          </Box>
        </Grid>
        <Grid item xs={6} sx={styles.navBarBoxAuth}>
          <Box sx={styles.marginRight120px}>
            <Link>CONTACT</Link>
          </Box>
          <Box>
            <Button
              onClick={(prev) => setIsOpen({ ...prev, signUp: true })}
              sx={{
                backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8be0a0135123287.61e1e827b6245.jpg)`,
                padding: '15px 35px',
                color: '#FFFFFF',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
