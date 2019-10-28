import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { removeTraining } from '../../redux/actions';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import EditForm from '../Form/edit'
import CloseIcon from '@material-ui/icons/Close';




const ManageItem = ({ el, removeTraining }) => {

    // DOTS
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
      };

    // MODAL
    const [modalOpen, setOpenModal] = React.useState(false);

    const handleClickOpen = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        handleClose()
    };
    
    const dialog = (
        <div>
            <Dialog open={modalOpen} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
                <Typography align="center" variant="h4">
                    Add Training
                    <IconButton aria-label="close" onClick={handleCloseModal}>
                        <CloseIcon />
                    </IconButton>
                </Typography>
                <DialogContent>
                    <EditForm handleCloseModal={handleCloseModal} el={el} />
                </DialogContent>
            </Dialog>
        </div>
    )
    return (
        <>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {removeTraining(el.id); handleClose()} }> <DeleteIcon /> Delete</MenuItem>
                <MenuItem onClick={handleClickOpen}> <EditIcon /> Edit</MenuItem>

            </Menu>
            {dialog}
        </>
    );

    
}



export default connect(null, { removeTraining })(ManageItem);