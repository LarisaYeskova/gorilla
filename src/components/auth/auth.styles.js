export const styles = {
  modalContainer: {
    width: '100%',
    color: 'white',
    backgroundImage: `url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8be0a0135123287.61e1e827b6245.jpg)`,
  },
  modalContainerOverflow: {
    overflowY: 'scroll',
  },
  authCloseIconBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: '32px',
  },
  authCloseIconButton: {
    width: '60px',
    height: '60px',
    border: '1px solid white',
  },
  authCloseIcon: {
    color: 'white',
    width: '15px',
    height: '15px',
  },
  authTitle: {
    fontWeight: '400',
    fontSize: '40px',
    lineHeight: '59px',
    textTransform: 'uppercase',
  },
  authInfoAccTypography: {
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '145%',
  },
  link: {
    color: 'white',
    marginLeft: '4px',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '145%',
  },
  authFormContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    maxWidth: '100%',
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignEnd: {
    textAlign: 'end',
  },
  marginBottom25px: {
    marginBottom: '25px',
  },
  marginBottom20px: {
    marginBottom: '20px',
  },
  marginBottom60px: {
    marginBottom: '60px',
  },
  formTypography: {
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '36px',
    textTransform: 'uppercase',
    marginBottom: '40px',
  },
  textFieldBox: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '40px',
  },
  textFieldTypography: {
    color: 'white',
    marginBottom: '25px',
  },

  textFieldSelect: {
    svg: {
      color: 'white',
    },
  },

  authButton: {
    background: 'white',
    minHeight: '110px',
    color: 'black',
    fontWeight: '400',
    fontSize: '24px',
  },
  minWidth: {
    minWidth: '50%',
    '@media screen and (max-width: 1000px)': {
      maxWidth: '90%',
    },
  },
  maxWidth: {
    maxWidth: '50%',
    '@media screen and (max-width: 1000px)': {
      maxWidth: '90%',
    },
  },
};
