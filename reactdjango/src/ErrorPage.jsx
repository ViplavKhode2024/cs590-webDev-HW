// Component Imports
import NavBar from './NavBar';

// CSS Imports
import './style.css';
import './classStyle.css';

//Asset Imports
import pfwLogo from './assets/logo/fwLogo.png';

function ErrorPage() {

  return (
            <>
                <NavBar logo = {pfwLogo} />
                <section className="banner" style={{marginBottom: '0'}}>
                    <span className="bannerSpan">
                        404 Page Not Found
                    </span>
                </section>
            </>
    );
}

export default ErrorPage;