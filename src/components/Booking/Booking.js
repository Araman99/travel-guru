import { Container, Grid, Paper } from '@material-ui/core';
import React, { useContext, useState  } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useHistory} from 'react-router-dom';

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
        margin: '40px 80px',
        textTransform: 'uppercase',
        background: 'none',
        color: 'white',
    },
}));
const Booking = () => {
    const history = useHistory();
    const classes = useStyles();
    const [info, setInfo] = useContext(UserContext);
    const [from,setFrom]=useState(null)
    const [to,setTo]=useState(null)
    const inputStyle = {
        backgroundColor: '#f2f2f2',
        color: '#000',
    }
    const formControl =(e)=>{
        e.preventDefault()
        history.push("/destination")
    }
    return (
        <div className="HomeContainer">
            <Header />
            <Container>
                <Grid container spacing={8} className='mt-5'>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <h1 style={{fontFamily: 'sans-serif', fontSize: "56px",margin: '20px 0'}}>{info.areaName}</h1>
                            <p>{info.description}</p>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Form onSubmit={formControl} style={{ width: '90%', background: '#fff', padding: '20px', borderRadius: '8px' }}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Origin</Form.Label>
                                <Form.Control type="text" placeholder="Dhaka" style={inputStyle} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Destination</Form.Label>
                                <Form.Control type="text" placeholder="Cox's Bazar" style={inputStyle}  required />
                            </Form.Group>
                    
                            <Form.Group>
                            <div className="datepicker-section" style={{display:"flex"}}>
                                <div style={{marginRight:"5px"}}>
                                    <p>From</p>
                                    <DatePicker selected={from} 
                                        className="date-picker"
                                        style={inputStyle} 
                                        onChange={date => setFrom(date)} 
                                        required
                                        placeholderText="01/09" />
                                </div>
                                <div>
                                    <p>To</p>
                                    <DatePicker selected={to} 
                                        className="date-picker"
                                        style={inputStyle} 
                                        onChange={date => setTo(date)}
                                        required
                                        placeholderText="12/09" />
                                </div>
                            </div>
                            </Form.Group>
                            
                            <Form.Group>
                            <Form.Control type="submit" className="btn btn-warning" value="Start Booking"/>
                            </Form.Group>
                        </Form>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Booking;