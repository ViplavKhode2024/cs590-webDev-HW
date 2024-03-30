
// CSS Imports
import '../style.css';
import '../classStyle.css';

function Intro(props) {
    return (
        <section className="introSection">
        <div className="introHead">
            <h2> Welcome To The City of <span className="cityGradient">Fort Wayne</span> 
            <br/> 
            <span style={{fontSize: "30px"}}>Big City. Bigger Heart.</span> </h2>
        </div>

        <div className="introRow">
            <div className="introCol1">
                
                <p> Welcome to Fort Wayne! This beautiful city is known for its stunning culture, history, and festivals. 
                    Whether you're looking for adventure or relaxation, Fort Wayne has something for everyone.</p>
                
                <p> Some of the top attractions include Museum of Art, Science Central, The History Center, 
                    Headwaters Park, Botanical Conservatory, Lakeside Park & Rose Garden, efferson Pointe Shopping Center, 
                    and Cathedral of the Immaculate Conception.</p>
                
                <p> You can enjoy activities such as Ice Skating, shopping, fishing, biking and hiking. 
                    We hope you enjoy your stay! </p>
                
            </div>

            <div className="introCol2"> 
                <video controls className="introVideo">
                    <source src= {props.video + "#t=7"} type="video/mp4" />
                    Your browser does not support HTML video.
                </video> 
            </div>
        </div>
    </section>
    );
  }
  
  export default Intro;
  