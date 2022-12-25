export const styles = {
  footerContainer: {
    color: '#0C0C0C',
  },
  footerItem: {
    margin: '0px 25px',
    borderTop: '1px solid #0C0C0C',
  },
  footerBox: {
    padding: '40px 30px 50px',
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
  },
  paymentContainer: {
    padding: '40px 60px',
    textAlign: 'start',
    minHeight: '770px',
    borderRight: '1px solid black',
    '@media screen and (max-width: 900px)': {
      borderBottom: '1px solid black',
      borderRight: 'none',
      maxHeight: '500px',
    },
  },

  paymentBox: {
    display: 'flex',
    '@media screen and (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '208px',
  },
  paymentButtonBox: {
    marginRight: '15px',
    height: '100%',
  },
  paymentButton: {
    maxHeight: '42px',
    padding: '10px 10px',
    height: '100%',
    border: '1px solid #0C0C0C80',
    borderRadius: '0px',
  },
  paymentButtonAuth: {
    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8be0a0135123287.61e1e827b6245.jpg)`,
    color: 'white',
    minHeight: '140px',
    fontSize: '24px',
    lineHeight: '36px',
  },
  paymentButtonAuthWhite: {
    border: '1px solid #0C0C0C',
    minHeight: '140px',
    fontSize: '24px',
    lineHeight: '36px',
  },
  joinContainer: {
    '@media screen and (max-width:  900px)': {
      minHeight: '500px',
    },
  },
  joinBox: {
    display: 'flex',
    overflow: 'hidden',
    justifyContent: 'center',
    borderBottom: '1px solid #0C0C0C',
  },
  joinImgContainer: {
    overflow: 'hidden',
    margin: '0px 25px',
  },
  imgMediaBox: {
    '@media screen and (max-width:  400px)': {
      display: 'none',
    },
  },
  joinTelegram: {
    right: '80%',
    left: '20%',
    top: '400px',
    '@media screen and (max-width:  900px)': {
      left: '2%',
      top: '60%',
    },
  },
  joinFacebook: {
    right: '60%',
    left: '40%',
    top: '120px',
    '@media screen and (max-width:  900px)': {
      left: '15%',
      top: '25%',
    },
  },
  joinInsta: {
    right: '40%',
    left: '60%',
    top: '350px',
    '@media screen and (max-width:  900px)': {
      left: '35%',
      top: '40%',
    },
  },
  joinStm: {
    right: '5%',
    top: '500px',
    '@media screen and (max-width:  900px)': {
      left: '50%',
      top: '70%',
    },
  },

  flex: {
    display: 'flex',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  marginRight15px: {
    '@media screen and (max-width:  900px)': {
      marginRight: 'none',
    },
    marginRight: '15px',
  },
  marginRight40px: {
    '@media screen and (max-width:  900px)': {
      marginRight: 'none',
    },
    marginRight: '40px',
  },
  relative: {
    position: 'relative',
  },
  positionAbsolute: {
    position: 'absolute',
  },
};
