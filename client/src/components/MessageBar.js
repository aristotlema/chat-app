import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    messageBar: {
        alignSelf: 'flex-end',
        width: '100%'
    },
});

const MessageBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.messageBar}>
            <TextField variant="filled" fullWidth/>
            <Button>Send</Button>
        </div>
    );
};

export default MessageBar;