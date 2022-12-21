import { Box, Grid } from '@mui/material';
import Lines from '../../../assets/img/lines.png';
import Graph from '../../../assets/img/graphs.png';

export default function Graphs() {
  return (
    <Grid
      container
      sx={{
        borderRight: '1px solid white',
        width: '100%',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Grid item xs={12}>
        <Box sx={{ width: '100%' }}>
          <img
            style={{
              width: '100%',
            }}
            src={[Lines]}
          ></img>
          {/* <img
                        src={Graph}>
                    </img> */}
        </Box>
      </Grid>
    </Grid>
  );
}
