import { Grid, Box, Button } from '@mui/material';
import GorillaCash from '../../assets/img/gorillaCashZ.svg';
import SmallToon from '../../assets/img/smallToon.svg';
import Toon from '../../assets/img/toon.svg';
import NavBar from './navBar/NavBar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { styles } from './header.styles';

export default function Header({ isOpen, closeModal, setIsOpen }) {
  const [showNav, setShowNav] = useState(true);
  const navFlipper = () => {
    setShowNav((current) => !current);
  };
  return (
    <>
      <Grid container>
        <Grid item xs={12} sx={styles.navBarContainer}>
          <Box sx={styles.burgerMediaBox}>
            <img src={SmallToon} alt="SmallToon"></img>
            <Button onClick={navFlipper}>
              <MenuIcon />
            </Button>
          </Box>
          {showNav ? (
            <Box sx={styles.navBarBox}>
              <NavBar isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
            </Box>
          ) : (
            <Box></Box>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box sx={styles.imgBox}>
            <Box sx={styles.imgNoWrap}>
              <img alt="Gorilla Cash" src={GorillaCash}></img>
            </Box>
            <Box sx={[styles.imgNoWrap, { margin: '0px 75px' }]}>
              <img alt="Toon" src={Toon}></img>
            </Box>
            <Box sx={styles.imgNoWrap}>
              <img alt="Gorilla Cash" src={GorillaCash}></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
