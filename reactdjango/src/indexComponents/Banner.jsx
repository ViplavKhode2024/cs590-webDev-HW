
// CSS Imports
import '../style.css';
import '../classStyle.css';

function Banner() {
    return (
        <section className="banner">
            <span className="bannerSpan">
                Adventures with a <br/> beautiful perspective <br/>
        
                <button 
                        className="ttdButton">
                    Things To Do
                </button>
            </span>
        </section>
    );
  }
  
  export default Banner;