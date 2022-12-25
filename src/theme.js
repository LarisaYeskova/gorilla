import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '70px',
      fontStyle: 'Bold',
      lineHeight: '104px',
    },
    h2: {
      fontSize: '40px',
      lineHeight: '59px',
      fontWeight: '400',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '40px',
      lineHeight: '53px',
      fontWeight: '400',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '24px',
      color: '#0C0C0C',
      lineHeight: '31px',
    },
    h5: {
      fontSize: '16px',
      fontStyle: 'Bold',
      lineHeight: '23px',
    },
    h6: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '18px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontSize: '16px',
          lineHeight: '24px',
          textDecoration: 'none',
          borderRadius: '0px',
          color: '#0C0C0C',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          ':hover': {
            borderBottom: '1px solid #0C0C0C',
          },
          cursor: 'pointer',
          fontSize: '13px',
          lineHeight: '17px',
          color: '#0C0C0C',
          textDecoration: 'none',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid white',
          opacity: '70%',
          input: {
            borderRadius: '0px',
            onclick: {
              borderRadius: 'none',
              border: '1px solid black',
            },
            color: 'white',
            cursor: 'pointer',
          },
          textArea: {
            color: 'white',
          },
          ':focus': {
            borderRadius: '0px',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: '1px solid white',
          opacity: '70%',
          input: {
            borderRadius: '0px',
            onclick: {
              borderRadius: 'none',
              border: '1px solid black',
            },
            color: 'white',
            cursor: 'pointer',
          },
          textArea: {
            color: 'white',
          },
          ':focus': {
            borderRadius: '0px',
          },
        },
      },
    },
  },
});

export default theme;
