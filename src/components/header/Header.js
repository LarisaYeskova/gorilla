import { Grid, Box, Typography } from '@mui/material';
import { useState } from 'react';
import GorillaCash from '../../assets/img/gorillaCash.svg';
import GorillaCashSecond from '../../assets/img/gorrillaCashSecond.svg';
import Toon from '../../assets/img/toon.svg';
import SignIn from '../auth/signIn/SignIn.modal';
import SignUp from '../auth/signUp/SignUp.modal';
import InfoHeader from './info/InfoHeader';
import NavBar from './navBar/NavBar';

export default function Header({ isOpen, closeModal, setIsOpen }) {
  return (
    <>
      <Grid container >
        <Grid item xs={12} sx={{ marginRight: '77px', marginLeft: '60px', padding: '28px 0px' }}>
          <NavBar isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ borderTop: '1px solid #0C0C0C', borderBottom: '1px solid #0C0C0C' }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
            <Box sx={{ wrap: 'no-wrap' }}>
              <img alt='Gorilla Cash' src={GorillaCash}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap', margin: '0px 75px' }}>
              <img alt='Toon' src={Toon}></img>
            </Box>
            <Box sx={{ wrap: 'no-wrap', }}>
              <img alt='Gorilla Cash' src={GorillaCashSecond}></img>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ padding: '40px 60px', }}>
          <Box>
            <InfoHeader isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
