import { Grid, Typography } from "@mui/material";
import Group from '../../assets/img/group.svg'
import Toon from '../../assets/img/bigToon.svg'

export default function () {
    return (
        <Grid container sx={{ color: 'white', }}>
            <Grid item xs={6} sx={{
                textAlign: 'end',
                borderRight: '1px solid white',
                paddingRight: '30px'
            }}>
                <Typography
                    sx={{
                        fontSize: '70px',
                        fontStyle: 'Bold',
                        lineHeight: '104px',
                    }}>WHY</Typography>
            </Grid>
            <Grid item xs={6}
                sx={{
                    textAlign: 'start',
                    paddingLeft: '30px'
                }} >
                <Typography
                    sx={{
                        fontSize: '70px',
                        fontStyle: 'Bold',
                        lineHeight: '104px',
                    }}>US</Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={Toon}></img>
            </Grid>

            <Grid item xs={12}>
                <img src={Group}></img>
            </Grid>
        </Grid>
    )
}