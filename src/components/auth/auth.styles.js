export const styles = {
  modalContainer: {
    width: '100%',
    color: 'white',
    backgroundImage: `url(https://celes.club/uploads/posts/2022-05/1653577268_73-celes-club-p-fon-dlya-saita-besshovnii-temnii-krasivie-75.jpg)`,
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
    cursor: 'pointer',
    color: 'white',
    textDecorationColor: 'white',
    ':hover': { textDecorationColor: 'black' },
    marginLeft: '4px',
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
  textField: {
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
  },
  maxWidth: {
    maxWidth: '50%',
  },
};
