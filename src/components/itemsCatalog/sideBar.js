import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse, Divider, ListItemSecondaryAction } from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ManageItem from './manageItem';
import { setSelected } from '../../redux/actions';
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        //paddingLeft: theme.spacing(4),
    },
    list: {
        overflow: "auto",
        height: '100%'
    }
}));


const SideBar = ({ parsedData, setSelected }) => {

    const classes = useStyles();

    const [ activeCollapses, setCollapses ] = useState({});

    const [ selectedIndex, setSelectedIndex ] = React.useState('');

    const setUpState = (data) => {
        setCollapses((prev) => {
            prev.hasOwnProperty(data)
                ?
                delete prev[ data ]
                :
                prev[ data ] = true;
            return Object.assign({ ...activeCollapses }, { ...prev })
        });
    }

    return (
        <List className={classes.list}>
            {parsedData.map(([ category, exercises ]) => (
                <div key={category}>
                    <ListItem button onClick={() => setUpState(category)} >
                        <ListItemText style={{ textTransform: "uppercase" }} primary={`${category}`} />
                        {activeCollapses[ category ] ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={activeCollapses[ category ]} timeout="auto" >
                        <List >
                            {exercises.map((el) => (
                                <ListItem selected={selectedIndex === el.id ? true : false} onClick={() => { setSelectedIndex(el.id); setSelected(el.id); }} key={el.id} button className={classes.nested}>
                                    <ListItemText
                                        color="secondary"
                                        primary={el.title}
                                    />
                                    <ListItemSecondaryAction className={classes.controlBtn}>
                                        <ManageItem el={el} />
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                    <Divider />
                </div>
            ))}
        </List>
    );
}




export default connect(null, { setSelected })(SideBar);