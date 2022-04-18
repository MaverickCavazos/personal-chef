import React from 'react'
import coverImage from "../../assets/cover/chef.jpg"


function About() {

  return (
    <section className="my-5 about-container"  >
    <div >
      <h1 id="about"></h1>
      <img src={coverImage} id= "myprofileimage" className="my-2" style={{ height: "auto", width: "65%" }} alt="cover" />
    </div>
      <div id="about-text" className="my-2">
        <p>
        PUT SOMETHING HERE
         </p>

      </div>
      
    </section>

    
  )
}

export default About