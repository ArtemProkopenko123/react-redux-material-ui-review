import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Grid, Button, Box, Paper, Slide, Typography, IconButton, Container } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { withStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { addTraining } from '../../redux/actions';

const useStyles = (theme => ({
  textField: {
    margin: "10px 0"
  },
  button: {
    marginTop: "20px"
  }
}));


class AddForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      submited: false,
      collapse: false,
      muscles: '',
      title: "",
      description: "",
    }
    
  }
  handleInputChange = (target) => {
    const { name, value } = target
    this.setState({
      [ name ]: value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      collapse: !this.state.collapse
    }, ()=> {
      const state = this.state;
      state.id = new Date();
      this.props.addTraining(this.state)
    }
    );


    setTimeout(() => {
      this.setState({
        submited: !this.state.submited
      })
    }, 1000)
  }

  goBackActions(){
    this.setState({
      collapse: false,
      submited: false
    });
    setTimeout(()=>{
      this.props.history.goBack()
    }, 600)
  }

  componentDidMount() {
    this.setState({
      collapse: !this.state.collapse
    })

  }
  render() {
    const {classes, muscles} = this.props
    const { collapse, title, description, submited,  } = this.state;
    const disabletButton = this.state.muscles !== '' && title !== '' && description !== '' ? false : true;
    return (
      <>
      <Container maxWidth="md">
        <Box m={1} >
          <IconButton aria-label="go back" onClick={() => this.goBackActions()}>
            <BackspaceIcon hidden={!collapse&&!submited ? true : false}/>
          </IconButton>
        </Box>
        <Slide timeout={500} direction="up" mountOnEnter unmountOnExit in={collapse}>

          <Grid container justify={"center"}>

            <Paper>
              <Box p={2} >
                <Typography align="center" variant="h4">
                  Add Training
                </Typography>
                <form noValidate style={{ marginTop: 8 }} onSubmit={(e) => this.handleSubmit(e)} >
                  <FormControl fullWidth>
                    <InputLabel htmlFor="muscles">Muscles</InputLabel>
                    <Select
                      name="muscles"
                      value={this.state.muscles}
                      onChange={(e) => this.handleInputChange(e.target)}
                      inputProps={{
                        name: 'muscles',
                        id: 'muscles',
                      }}
                    >
                    {muscles.map(el =>
                      <MenuItem key={el} value={el}>{el}</MenuItem>
                    )}

                    </Select>
                  </FormControl>
                  <TextField
                    className={classes.textField}
                    fullWidth
                    label="Title"
                    name="title"
                    value={title}
                    onChange={(e) => this.handleInputChange(e.target)}
                  />
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    multiline
                    value={description}
                    onChange={(e) => this.handleInputChange(e.target)}
                  />
                  <Button
                    className={classes.button}
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="small"
                    disabled={disabletButton}
                  >
                    Submit
                </Button>
                </form>
              </Box>
            </Paper>
          </Grid>
        </Slide>
        <Slide direction="up" mountOnEnter unmountOnExit in={submited}>
          <Grid container justify={"center"}>
            <Paper >
              <Box p={2} >
                <Typography>
                  Thanks!
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Slide>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  const {muscles} = store;
  return { muscles }
}


export default  withRouter( withStyles(useStyles)(connect(mapStateToProps, {addTraining})(AddForm)));