import React from 'react';
import { Container, Button, Box, IconButton } from '@material-ui/core';
import { connect } from "react-redux";
import { axiosCall } from '../../redux/actions';
import { withRouter } from "react-router";
import BackspaceIcon from '@material-ui/icons/Backspace';
const MoreInfo = (props) => {

    
    return ( 
    <>
    <Container maxWidth="md">
        <Box m={1} >
          <IconButton aria-label="go back" onClick={() => props.history.goBack()}>
            <BackspaceIcon />
          </IconButton>
        </Box>
        <Button color="secondary" onClick={()=> axiosCall()}>
            Async API Call
        </Button>
    </Container>
    </> );
}
const mapStateToProps = state => {
    const {muscles} = state
    return {muscles}
}

export default  withRouter(connect(mapStateToProps, { axiosCall })(MoreInfo));