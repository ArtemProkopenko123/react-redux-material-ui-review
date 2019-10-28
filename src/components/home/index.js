import React from "react";
import StatusBar from "../itemsCatalog/statusBar";
import { Grid, Paper, CircularProgress , Container } from "@material-ui/core";
import SideBar from "../itemsCatalog/sideBar";
import DetailInfo from "../itemsCatalog/detailsInfo";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";


const styles = {
    root: {
        padding: 30,
        backgroundColor: "#f5f5f5",
        minHeight: "calc( 100vh - 200px )"
    },
    sidebar: {
        maxHeight: "calc( 100vh - 130px )"
    }
}

const Home = ({ classes, parsedData, selectedExercise }) => {


    return (
        <Container maxWidth="md">
            <Grid container spacing={2}>

                {parsedData? 
                    <>
                        <Grid item xs={12}>
                            <Paper elevation={3} >
                                <StatusBar />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={4} md={3} xl={2} className={classes.sidebar}>
                            <SideBar parsedData={parsedData} />
                        </Grid>
                        <Grid item xs={12} sm={8} md={9} xl={10}>
                            <Paper elevation={1} className={classes.root}>
                                <DetailInfo selectedItem={selectedExercise[ 0 ]} />
                            </Paper>
                        </Grid>
                    </>
                :
                    <Grid container justify="center" alignItems="center" >
                        <Grid item style={{ padding: 30 }}  >
                            <CircularProgress />
                        </Grid>
                    </Grid>
                }
                
            </Grid>
        </Container>
    );
}

const mapStateToProps = (store) => {
    const { exercises, selectedExercise } = store

    const parsedData = Object.entries(
        exercises.reduce((exercises1, exercise2) => {

            const { muscles } = exercise2

            exercises1[ muscles ] = exercises1[ muscles ]
                ? [ ...exercises1[ muscles ], exercise2 ]
                : [ exercise2 ]

            return exercises1
        }, {})
    )

    return { parsedData, selectedExercise }
}


export default withStyles(styles)(connect(mapStateToProps)(Home));

