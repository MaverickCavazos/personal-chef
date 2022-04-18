import React from 'react'
import coverImage from "../../assets/cover/LINK.jpg"


function About() {

  return (
    <section className="spBgcover sp-h-full sp-antialiased sp-bg-slideshow"  >
    <div >
      <h1 id="about"></h1>
      <img src={coverImage} id= "myprofileimage" className="my-2" style={{ height: "auto", width: "65%" }} alt="cover" />
    </div>
      <div id="about-text" className="my-2">
        <p>
        PUT SOMETHING Her
         </p>

      </div>
      
    </section>

    
  )
}

export default About