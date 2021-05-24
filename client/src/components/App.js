import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageBar from './MessageBar';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
    },
});

const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MessageBar />
        </div>
    );
};

export default App;