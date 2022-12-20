import { Box } from '@mui/material';
import { styles } from '../../auth.styles';
import SignUpAddInfo from './additionalInfo/SignUp.additionalInfo';
import SignUpContactInfo from './contactInfo/SignUp.contactInfo';
import SignUpMailingAdress from './mailingAdress/SignUp.mailingAddress';

export default function SignUpForm() {
  return (
    <Box sx={styles.maxWidth}>
      <Box sx={styles.marginBottom60px}>
        <SignUpContactInfo />
      </Box>
      <Box sx={styles.marginBottom60px}>
        <SignUpMailingAdress />
      </Box>
      <Box sx={styles.marginBottom60px}>
        <SignUpAddInfo />
      </Box>
    </Box>
  );
}
