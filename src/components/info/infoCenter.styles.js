export const styles = {
  infoCenterBox: {
    borderTop: '1px solid black',
    margin: '0px 25px',
    overflow: 'hidden',
  },
  infoCenterContainer: {
    textAlign: 'start',
    minHeight: '500px',
  },
  infoCenterItem: {
    borderRight: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (max-width:  900px)': {
      minHeight: '25  0px',
      borderRight: 'none',
      borderBottom: '1px solid black',
    },
  },
  infoContainer: {
    textAlign: 'start',
    minHeight: '500px',
    padding: '40px 35px',
  },
  infoBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media screen and (max-width:  900px)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  infoAuthItem: {
    paddingLeft: '55px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media screen and (max-width:  900px)': {
      paddingLeft: '0px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'end',
    },
  },
  infoAuthButton: {
    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8be0a0135123287.61e1e827b6245.jpg)`,
    color: 'white',
    minHeight: '140px',
    fontSize: '24px',
    lineHeight: '36px',
  },
  infoAuthButtonWhite: {
    border: '1px solid #0C0C0C',
    minHeight: '140px',
    fontSize: '24px',
    lineHeight: '36px',
  },
  infoHeart: {
    left: '58%',
    top: '10%',
    '@media screen and (max-width: 900px)': {
      left: '30%',
      top: '10%',
    },
  },
  infoMoney: {
    left: '66%',
    top: '35%',
    '@media screen and (max-width: 900px)': {
      left: '80%',
      top: '-30%',
    },
    '@media screen and (max-width: 650px)': {
      display: 'none',
    },
  },
  infoToon: {
    left: '82%',
    top: '12%',
    '@media screen and (max-width: 900px)': {
      left: '45%',
      top: '-10%',
    },
  },
  infoHeartDublicate: {
    left: '90%',
    top: '40%',
    '@media screen and (max-width: 900px)': {
      left: '65%',
      top: '5%',
    },
  },
  positionAbsolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  flex: {
    display: 'flex',
  },
};
