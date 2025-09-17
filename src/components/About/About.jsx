import React from "react";
import aboutCSS from './About.module.css'
import aboutImg1 from '../../assets/images/restaurant.jpg'

function About() {
    return (
        <div className={`${aboutCSS.About_Wrapper} section`}>
        
           <div className={aboutCSS.aboutImg}>
            <img src={aboutImg1} alt="About-Image" />
           </div>
            <div className={aboutCSS.aboutContent}>
            <small>About Us</small>
            <h1>Dive into Culinary Excellence</h1>
            <p>We are a restaurant dedicated to providing the best dining experience.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.
            </p>
                <div className={aboutCSS.about_btns}>
                    <button className={aboutCSS.btn1}>LEARN MORE</button>
                    <a href="#">
                        <i className="ri-phone-line"></i> 888-123-4567
                    </a>
                </div>
               </div>

                </div> 
    );
}

export default About;