import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux'
import { getSelectedExercise } from '../../redux/actions';
import {Link} from 'react-router-dom'

const DetailInfo = ({ selectedItem }) => (
    <>
        {selectedItem ?
            <Grid container justify="center" >
                <Grid item xs={12} >
                    <Typography variant="h2" align="center">
                        {selectedItem.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        {selectedItem.description}
                    </Typography>
                    <Link to="/home/moreInfo" style={{textDecoration: "none"}}>
                        <Button color="secondary" variant="contained" fullWidth >
                            More Information
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            :
            <Typography align="center" variant="h2">WELCOME</Typography>
        }
    </>
);



export default connect(null, { getSelectedExercise })(DetailInfo);