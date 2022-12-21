import { Grid } from '@mui/material';
import Description from './description/Description';
import Graphs from './graphs/Graphs';

export default function OurGoal() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Graphs />
      </Grid>
      <Grid item xs={6}>
        <Description />
      </Grid>
    </Grid>
  );
}
