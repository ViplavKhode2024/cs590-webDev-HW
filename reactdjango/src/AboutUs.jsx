
// Basic React Imports
import {React, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

//Componet Imports
import NavBar from './NavBar';
import Footer from './Footer';
import About from './aboutComponents/about';

//Asset Imports
import pfwLogo from './assets/logo/fwLogo.png';
import First from './assets/images/first.avif';
import Second from './assets/images/second.avif';
import Third from './assets/images/third.avif';

//CSS Imports
import './style.css';
import './classStyle.css';

const imagesList = [First, Second, Third];

function AboutUs() {

  const navigate = useNavigate();

  useEffect(() => {
     
    if(localStorage.getItem('token') == null){
      navigate('/');
    }

  });

    return (
      <>
        <NavBar logo={pfwLogo} />
        <About images={imagesList} />
        <Footer />
      </>
    );
  }
  
export default AboutUs;
