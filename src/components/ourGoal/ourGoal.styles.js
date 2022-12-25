export const styles = {
  ourGoalMediaBox: {
    '@media screen and (max-width:  900px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
    },
  },
  graphsContainer: {
    width: '100%',
    overflow: 'hidden',
    padding: '20px',
    borderRight: '1px solid white',
    height: '100%',
  },
  imgContainer: {
    width: '100%',
    position: 'relative',
  },
  imgAbsolute: {
    position: 'absolute',
    top: '0%',
    width: '100%',
    height: '100%',
    right: '20px',
  },
  descriptionContainer: {
    height: '100%',
    color: 'white',
    textAlign: 'start',
    paddingTop: '85px',
    paddingLeft: '55px',
    '@media screen and (max-width:  900px)': {
      borderBottom: '1px solid white',
    },
  },
  descriptionItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  marginBottom25px: {
    marginBottom: '25px',
  },
};
