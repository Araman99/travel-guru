import { Paper } from '@material-ui/core';
import React,{ useContext } from 'react';
import { UserContext } from '../../../App';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    coxs_bazar: {
        height: '400px',
        color: 'white',
        align: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        fontSize: '24px',
        fontWeight: '400',
        border: '3px solid #F9A51A',
        borderRadius: '18px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&:hover': {
            border: '3px solid rgb(16,101,157)',
            filter: 'brightness(200%)',
            transition:' width 2s',
        },
    },
}));
const TravelArea = (props) => {
    const {areaName, description, img} = props.details
    const classes = useStyles();
    const [info,setInfo] = useContext(UserContext);
    const handleDescription=()=>{
        setInfo(props.details)
      }
    return (
        <div>

            <Paper className={classes.coxs_bazar} style={{
                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${img})`
            }}onClick={handleDescription} >
                <p style={{ padding: '20px 10px' }}>{areaName}</p>
            </Paper>
        </div>
    );
};

export default TravelArea;