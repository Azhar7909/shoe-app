import React from 'react';
import Shoes from '../globalData/Shoe.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

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
    Paper:{
        height: '255px',
        width: '200px',
        textAlign: 'center',
    },
    Link: {
    color: 'deeppink',
    textDecorationLine: 'none',
    marginRight: '10px'
  },
}));

export default function ProductScreen() {
    const classes = useStyles();

    return (
        <div>
            <h1 style={{textAlign: 'center', color: 'darkcyan' }}>Wellcome To Product</h1>
            <div className={classes.root}>
                {Object.keys(Shoes).map(keyName => {
                        const shoe = Shoes[keyName]
                    return(
                        <Paper className={classes.Paper} elevation={3} key={keyName} >
                        <Link 
                            className={classes.Link}
                            to={`/ProductItemScreen/${keyName}`}>
                            <h4>{shoe.name}</h4>
                            <img src={shoe.img} height={150} alt="shoe" />
                        </Link>
                    </Paper>
                    )
                })}
            </div>
        </div>
    )
}
