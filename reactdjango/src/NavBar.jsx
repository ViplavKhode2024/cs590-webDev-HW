
// React Imports
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//CSS Imports
import './style.css';
import './classStyle.css';

function AdminButton(){
    const storedPermissionsJSON = localStorage.getItem('permissionList');

    if(storedPermissionsJSON.includes("auth.view_user") == true){
        return (<li><a href='/admin'>ADMIN</a></li>);
    }
    else    
        return null;
}

function NavBar(props) {

    const navigate = useNavigate();

    const goToIndex = () => {
    navigate('/');
    };

    const goToAbout = () => {
        navigate('/about');
    };

    const [searchedText, setSearchedText] = useState('');

    const handleInputChange = (event) => {
        setSearchedText(event.target.value);
    };

    const handleInputBlur = () => {
        setSearchedText('');
    };


  return (
            <header>
                
                <img src={props.logo} onClick={goToIndex} alt="Fort Wayne Logo" 
                style= {{ height: '5%', width: '5%', margin: '15px 20px'}} />

                <nav>
                    <ul>
                        <li><a href="/about" onClick={goToAbout}>ABOUT US</a></li>
                        <li><a href="/meeting">MEETINGS</a></li>
                        <li><a href="/things-to-do">THINGS TO DO</a></li>
                        <li><a href="/events">EVENTS</a></li>
                        <li><a href="/food-drink">FOOD & DRINK</a></li>
                        <AdminButton/>
                    </ul>
                </nav>

                <form className="search">
                    <input type="text" placeholder="Enter Keywords" id="searchInp" value={searchedText} onChange={handleInputChange} onBlur={handleInputBlur} />
            
                    <button type="button">
                        <span id="searchBtn">{searchedText ? 'Typing...' : 'Search'}</span>
                    </button>
                </form>
                <button className='logOut' onClick={(e) => {localStorage.removeItem('token'); console.log(localStorage.getItem); navigate('/')}}>
                    Log Out
                </button>
                

            </header>
    );
}

export default NavBar;
