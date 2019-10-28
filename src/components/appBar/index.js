import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Grid, Box, Container } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import './style.css'

const AppBarCustom = () => {
  return (
    <>
      <AppBar color="default" position="static" >
        <Container maxWidth="md">
        <Grid container justify="center" >
          <Grid item container alignItems="center" xs={1} >
            <Box m={2}>
              <NavLink style={{color:"inherit", textDecoration:"none"}} color="inherit" to="/">
                <img src={'https://image.flaticon.com/icons/png/512/23/23656.png'} alt="logo" width="30px" />
              </NavLink>
            </Box>
          </Grid>
          <Grid item container justify="flex-end" xs={11} >
            <Box p={1}>
              <NavLink  to="/add">
                <Fab size="medium" color="secondary" aria-label="add" >
                  <AddIcon />
                </Fab>
              </NavLink>
            </Box>
            
            <Box p={1}>
              <Fab  size="medium" color="secondary" aria-label="add">
                <Badge badgeContent={8} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </Fab>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </AppBar>
    </>
  );
};

export default AppBarCustom;
