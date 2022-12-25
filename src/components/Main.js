import { Box } from '@mui/material';
import { useState } from 'react';
import SignIn from './auth/signIn/SignIn.modal';
import SignUp from './auth/signUp/SignUp.modal';
import Footer from './footer/footer';
import Header from './header/Header';
import InfoCenter from './info/InfoCenter';
import { styles } from './main.styles';
import OurGoal from './ourGoal/OurGoal';
import WhyUs from './whyUS/WhyUs';

export default function Main() {
  const initialState = {
    signUp: false,
    signIn: false,
  };
  const [isOpen, setIsOpen] = useState(initialState);
  const closeModal = () => {
    setIsOpen(initialState);
  };
  return (
    <Box>
      <Header setIsOpen={setIsOpen} />
      <InfoCenter setIsOpen={setIsOpen} />
      <Box sx={styles.mainBox}>
        <Box sx={styles.mainBorder}>
          <OurGoal />
        </Box>
        <WhyUs />
      </Box>
      <Footer isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
      <SignUp isOpen={isOpen.signUp} setIsOpen={setIsOpen} closeModal={closeModal} />
      <SignIn isOpen={isOpen.signIn} setIsOpen={setIsOpen} closeModal={closeModal} />
    </Box>
  );
}
