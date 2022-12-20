import { Grid, Box } from '@mui/material';
import { useState } from 'react';
import GorillaCash from '../../assets/img/gorillaCash.svg';
import GorillaCashSecond from '../../assets/img/gorrillaCashSecond.svg';
import Toon from '../../assets/img/Toon.svg';
import SignIn from '../auth/signIn/SignIn.modal';
import SignUp from '../auth/signUp/SignUp.modal';
import NavBar from './navBar/NavBar';

export default function Header() {
  const initialState = {
    signUp: false,
    signIn: false,
  };
  const [isOpen, setIsOpen] = useState(initialState);
  const closeModal = () => {
    setIsOpen(initialState);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={{ marginRight: '77px', marginLeft: '65px', padding: '33px 0px' }}>
          <Box>
            <NavBar />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ borderTop: '1px solid #0C0C0C', borderBottom: '1px solid #0C0C0C' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ wrap: 'no-wrap' }}>
              <img src={GorillaCash}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap', margin: '0px 85px' }}>
              <img src={Toon}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap' }}>
              <img src={GorillaCashSecond}></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
