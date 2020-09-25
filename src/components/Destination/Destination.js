import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Header from '../Header/Header';
import img1 from '../../Image/Rectangle 26.png';
import img2 from '../../Image/Rectangle 27.png';
import img3 from '../../Image/Rectangle 28.png';
import start from '../../Image/Icon/star_1_.png';
import {withGoogleMap,withScriptjs,GoogleMap} from "react-google-maps";

function Map(){
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 24.533, lng: 92.05 }}
        />
    );
}
const WrappedMap = withScriptjs(withGoogleMap(Map))

const Destination = () => {
    return (
        <div>
            <Header filters='invert(1)' />
            
            <Container>
            <hr/>
                <Grid container justify="space-between" style={{ marginTop: "30px" }}>
                    <Grid item xs={12} md={7}>
                        <div style={{ marginLeft: "15px" }}>

                            <small style={{ color: "grey" }}>
                            252 Stays Sep 24-20 3guest
                        </small>
                            <h3 style={{ margin: 0 }}>
                                Stay in Cox's Bazar
                        </h3>
                        </div>
                        <Grid container style={{ padding: '20px' }}>
                            <Grid item md={4} style={{ display: 'flex' }}>
                                <img src={img1} className='w-100' alt="" />
                            </Grid>
                            <Grid item xs={8} md={6} style={{ paddingLeft: '30px' }}>
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 bats <br />Wif Air Conditioning Kitchen <br />Cancellation fexibility availiable </p>
                                <p><img src={start} style={{ width: '16px' }} alt="" /> <b>4.9(20) <span> $34/</span></b> night  <small>$167total</small></p>
                            </Grid>
                        </Grid>
                        <Grid container style={{ padding: '20px' }}>
                            <Grid item md={4} style={{ display: 'flex' }}>
                                <img src={img2} className='w-100' alt="" />
                            </Grid>
                            <Grid item xs={8} md={6} style={{ paddingLeft: '30px' }}>
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 bats <br />Wif Air Conditioning Kitchen <br />Cancellation fexibility availiable </p>
                                <p><img src={start} style={{ width: '16px' }} alt="" /> <b>4.8(10) <span>$52/</span></b> night <small>$167total</small></p>
                            </Grid>
                        </Grid>
                        <Grid container style={{ padding: '20px' }}>
                            <Grid item md={4} style={{ display: 'flex' }}>
                                <img src={img3} className='w-100' alt="" />
                            </Grid>
                            <Grid item xs={8} md={6} style={{ paddingLeft: '30px' }}>
                                <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                                <p>4 guests 2 bedrooms 2 beds 2 bats <br />Wif Air Conditioning Kitchen <br />Cancellation fexibility availiable </p>
                                <p><img src={start} style={{ width: '16px' }} alt="" /> <b>4.9(25) <span>$44/</span></b> night <small>$167total</small></p>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={12} md={5}>
                         <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places$key=AIzaSyBN4X86XPT_aQwsJxqQZPB4Wfdx_ms2WZk`} 
                         loadingElement ={<div style={{height: '100%'}}></div>}
                         containerElement ={<div style={{height: '100%'}}></div>}
                         mapElement ={<div style={{height: '100%'}}></div>}
                         />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Destination;