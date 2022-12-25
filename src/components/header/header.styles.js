export const styles = {
  navBarContainer: {
    borderBottom: '1px solid black',
    margin: '0px 25px',
  },
  navBarBox: {
    padding: '25px 65px',
  },
  imgBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imgNoWrap: {
    wrap: 'no-wrap',
  },
  burgerMediaBox: {
    margin: '0px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media screen and (min-width: 900px)': {
      textAlign: 'end',
      display: 'none',
    },
  },

  navBarBoxLink: {
    display: 'flex',
    alignItems: 'center',
    '@media screen and (max-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    '@media screen and (max-width: 450px)': {
      display: 'flex',
      alignItems: 'start',
      flexDirection: 'column',
    },
  },
  marginRight120px: {
    marginRight: '120px',
    '@media screen and (max-width: 900px)': {
      marginRight: '0px',
    },
  },
  marginRight100px: {
    marginRight: '100px',
    '@media screen and (max-width: 900px)': {
      marginRight: '0px',
    },
  },
  navBarBoxAuth: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    '@media screen and (max-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'end',
    },
  },
};
