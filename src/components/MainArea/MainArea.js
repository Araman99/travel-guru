import React, { useContext } from 'react';
import {  Grid,  Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../App';
import { travelList } from '../../Database/Database'
import TravelArea from './TravelArea/TravelArea';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cart: { 
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
        padding: '0 10px',
        height: '416px',
        width: '270px',
        boxSizing: 'border-box',
        },
    },
    paper: {
        margin: '0 40px 0 120px',
        textTransform: 'uppercase',
        background: 'none',
        color: 'white',
    },
}));
const MainArea = () => {
    const classes = useStyles();
const [info] = useContext(UserContext);
    return (
        <>
        <Grid container spacing={0} className='mt-5'>
            <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <h1 style={{fontFamily: 'sans-serif',fontSize: "56px",margin: '20px 0'}}>{info.areaName}</h1>
                    <p style={{textTransform: 'capitalize'}}>{info.description}</p>
                    <Link to="/booking">
                        <button className="button" style={{width: '200px'}}>Booking &#8594;</button>
                    </Link>
                </Paper>
            </Grid>
            <Grid item xs={7} className={classes.cart}>
                {
                    travelList.map((t) => {
                        return (
                            <TravelArea key={t.id} details={t}/>
                        )
                    })
                }
            </Grid>
        </Grid>
        </>
    );
};

export default MainArea;