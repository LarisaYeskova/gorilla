import { Box, Grid } from '@mui/material';
import Lines from '../../../assets/img/lines.png';
import Graph from '../../../assets/img/graphs.png';
import { styles } from '../ourGoal.styles';

export default function Graphs() {
  return (
    <Grid container sx={styles.graphsContainer}>
      <Grid item xs={12}>
        <Box sx={styles.imgContainer}>
          <Box>
            <img
              style={{
                width: '100%',
                height: '100%',
              }}
              src={Graph}
              alt="Graph"
            ></img>
          </Box>
          <Box sx={styles.imgAbsolute}>
            <img src={Lines} alt="Lines"></img>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
