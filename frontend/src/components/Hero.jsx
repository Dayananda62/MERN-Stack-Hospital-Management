import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            
            Care Plus Medical Institute offers cutting-edge 
            healthcare services with a focus on compassion and 
            precision. Our dedicated team of experts provides 
            personalized care tailored to your individual needs.
             At Care Plus, we are committed to supporting your 
             journey to optimal health and overall well-being.
                      </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
