import React from 'react';
import Shoes from '../globalData/Shoe.json';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    Paper: {
        height: '433px',
        width: '356px',
        textAlign: 'center',
    },
}));

export default function ProductItemScreen() {
    const classes = useStyles();

    const { id } = useParams();
    const shoe = Shoes[id];

    if (!shoe)
        return <h2>Product Not Found!</h2>

    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'darkcyan' }}>Wellcome To Product Item</h1>
            <div className={classes.root}>
                <Paper className={classes.Paper} elevation={3} >
                    <h4>{shoe.name}</h4>
                    <img src={shoe.img} height={350} alt="shoe" />
                </Paper>
            </div>
        </div>
    )
}
