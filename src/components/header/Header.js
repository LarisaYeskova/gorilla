import { Grid, Box } from '@mui/material';
import GorillaCash from '../../assets/img/gorillaCashZ.svg';
import Toon from '../../assets/img/toon.svg';
import NavBar from './navBar/NavBar';

export default function Header({ isOpen, closeModal, setIsOpen }) {
  return (
    <>
      <Grid container >
        <Grid item xs={12} sx={{ borderBottom: '1px solid black', margin: '0px 25px' }}>
          <Box sx={{ padding: '25px 65px' }}>
            <NavBar isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
        // sx={{ borderTop: '1px solid #0C0C0C', borderBottom: '1px solid #0C0C0C' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              // minHeight: '200px',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ wrap: 'no-wrap' }}>
              <img alt="Gorilla Cash" src={GorillaCash}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap', margin: '0px 75px' }}>
              <img alt="Toon" src={Toon}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap' }}>
              <img alt="Gorilla Cash" src={GorillaCash}></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
