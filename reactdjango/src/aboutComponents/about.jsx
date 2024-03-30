
// CSS Imports
import '../style.css';
import '../classStyle.css';

function About(props) {
    return (
        <main className="aboutSection">
            <section className="banner2"> </section>
    
            <div className="aboutHead">
                <h2 style={{fontWeight: "700"}}>About</h2>
            </div>

            <div className="grid-container">
                <div className="grid-item">   
                    <img src={props.images[0]} id="aboutImg" alt="Fort Wayne Streets" className="aboutImg" />
                </div>
                <div className="grid-item">
                    <section style={{fontSize: "40px", fontWeight: "700"}}> 
                        About Fort Wayne, Indiana</section>
                    <section style={{fontSize: "18px"}}> 
                        Fort Wayne is the second-largest city in the state of Indiana, and the hub of Northeast Indiana. We… 
                    </section>
                    <a href="https://www.visitfortwayne.com/about-us/about-fort-wayne-indiana/">
                        <section className="readMore"> Read More </section></a>
                </div>
                <div className="grid-item">
                    <section style={{fontSize: "40px", fontWeight: "700"}}> Impact Calculator</section>
                    <section style={{fontSize: "18px"}}> Visit Fort Wayne  has invested in a new Economic Impact Calculator tool to help you determine…</section>
                    <a href="https://www.visitfortwayne.com/about-us/impact-calculator/"><section className="readMore"> Read More </section></a>
                </div>  
                <div className="grid-item">
            
                    <img src={props.images[1]} id="aboutImg" alt="Girl Performaing a Dance" className="aboutImg" />
                </div>
                <div className="grid-item">        
                    <img src={props.images[2]} id="aboutImg" alt="A Baseball Stadium" className="aboutImg" />
                </div>
                <div className="grid-item">
                    <section style={{fontSize: "40px", fontWeight: "700"}}> Partner With Us</section>
                    <a href="https://www.visitfortwayne.com/partners/"><section className="readMore"> Read More</section></a>
                </div> 
            </div>
            
    </main>
    );
  }
  
  export default About;