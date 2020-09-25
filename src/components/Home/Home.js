import React from 'react';
import  './Home.css';
import Header from '../Header/Header'
import MainArea from '../MainArea/MainArea';


const Home = () => {


    return (
        <div className="HomeContainer">
           <Header/>
           <MainArea/>
           <div className='text-center' style={{padding: '30px', marginTop: "60px"}}>
           <span style={{background: '#fff', borderRadius: '50%', fontSize: '40px', marginRight: '20px'}}>&#60;</span>
           <span style={{background: '#fff', borderRadius: '50%', fontSize: '40px',}}>&#62;</span>
           </div>
        </div>
    );
};

export default Home;