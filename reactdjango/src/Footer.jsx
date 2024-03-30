
// React Imports
import { useState } from 'react';

// CSS Imports
import './style.css';
import './classStyle.css';

function Footer() {

  const [buttonColor, setButtonColor] = useState('#ccc');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsButtonDisabled(!event.target.checked);
    setButtonColor(event.target.checked ? '#e88a00' : '#ccc');
  };


    return (
        <footer>
            <div className="footerDiv">
                <h3>Address</h3>
                <p>927 South Harrison Street<br/>Fort Wayne, Indiana 46802</p>
                <p>Phone: (260) 424-3700</p>
            </div>

            <div className="footerDiv">
                <h3>Visitors Center Hours</h3>
                
                <p>Mon: 9:30 am-5 pm</p>
                <p>Tue-Fri: 8 am-5 pm</p>
            </div>

            <div className="footerDiv contactForm">
                <h3 style={{fontFamily: 'inherit', fontWeight: '100', 
                    fontSize: '1.5em', margin: '0 0 10px 0', textAlign: 'center'}}>Newsletter</h3>
                
                <form name="footerForm">
                    
                    <label htmlFor="email">Email</label> 
                    <input type="text" id="email" name="email" placeholder="Enter Your Email"/>
                    
                    <label htmlFor="name">Name</label> 
                    <input type="text" id="name" name="name" placeholder="Enter Your Name"/>
                    
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input type="checkbox" id="checkbox" onChange={handleCheckboxChange} style={{width: "10%"}}/>
                        <span style={{fontSize: '11px'}}> By Clicking This You Accept The Terms and Conditions </span>
                    </div>
                    
                    <button id="myButton" style={{ backgroundColor: buttonColor, 
                            cursor: isButtonDisabled ? 'not-allowed' : 'pointer', }}
                    disabled={isButtonDisabled}> Subscribe </button>
                </form>
            </div>
        </footer>
    );
}
  
  export default Footer;
  