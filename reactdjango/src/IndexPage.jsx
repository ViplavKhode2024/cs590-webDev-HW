
// Basic React Imports
import React, { useEffect } from 'react';

// Component Imports
import NavBar from './NavBar';
import Footer from './Footer';
import Banner from './indexComponents/Banner';
import Intro from './indexComponents/Intro';

// Asset imports
import pfwLogo from './assets/logo/fwLogo.png';
import video from './assets/video/welcomeVideo.mp4';

// CSS Imports
import './style.css';
import './classStyle.css';
import { useNavigate } from 'react-router-dom';


function IndexPage() {
    
    const navigate = useNavigate();

    useEffect(() => {
     
      if(localStorage.getItem('token') == null){
        navigate('/');
      }

    });

    return (
      <>
        <NavBar logo={pfwLogo} />
        <Banner />
        <Intro video={video} />
        <Footer />
      </>
    );
  }
  
export default IndexPage;
