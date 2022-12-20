import { Box } from '@mui/material';
import { useState } from 'react';
import SignIn from './auth/signIn/SignIn.modal';
import SignUp from './auth/signUp/SignUp.modal';
import Header from './header/Header';
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
  console.log(isOpen)
  return (
    <>
      <Header isOpen={isOpen} closeModal={closeModal} setIsOpen={setIsOpen} />
      <Box sx={{
        backgroundImage: `url(https://celes.club/uploads/posts/2022-05/1653577268_73-celes-club-p-fon-dlya-saita-besshovnii-temnii-krasivie-75.jpg)`,
      }}>
        <Box sx={{ borderBottom: '1px solid white' }}>
          <OurGoal />
        </Box>
        <WhyUs />
      </Box>
      <SignUp isOpen={isOpen.signUp} setIsOpen={setIsOpen} closeModal={closeModal} />
      <SignIn isOpen={isOpen.signIn} setIsOpen={setIsOpen} closeModal={closeModal} />
    </>
  );
}
