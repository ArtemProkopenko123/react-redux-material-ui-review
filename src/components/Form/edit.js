import React, { Component } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button,Container } from '@material-ui/core';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { editTraining } from '../../redux/actions';


const useStyles = (theme => ({
  textField: {
    margin: "10px 0"
  },
  button: {
    margin: "20px 0 "
  }
}));


class EditForm extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
        id: this.props.el.id,
        submited: false,
        collapse: false,
        muscles: this.props.el.muscles,
        title: this.props.el.title,
        description: this.props.el.description,
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
    this.props.editTraining(this.state);
    this.props.handleCloseModal()
  };

  render() {
    const { classes, muscles } = this.props
    const { title, description } = this.state;
    const disabletButton = this.state.muscles !== '' && title !== '' && description !== '' ? false : true;
    return (
      <>
      <Container maxWidth="md">

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
        </Container>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  const {muscles} = store;
  return { muscles }
}


export default  withRouter( withStyles(useStyles)(connect(mapStateToProps, {editTraining})(EditForm)));