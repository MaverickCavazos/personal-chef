import React from 'react';
import img1 from '../images/chef_foluke.jpg';
import img2 from '../images/cooking-background.jpg';

function About() {
    return (
      <body id = "img2" src = {img2} alt = "">
      <article>
        <div>
            <img id = "img1" src = {img1} alt = ""/>
            <p id = "chefSum">
            Chef Foluke Olaoye is an Nigerian American chef who was born and raised in Gainesville Florida, she has been cooking for over 10 years in corporate kitchens for athletes and entertainers. She has experience with teaching cooking class, meal prep and dietary restrictions including vegan, vegetarian and Gluten free. She has travels to different parts of the world cooking with wonderful chefs and friends learning some great cuisines such as Western, Mexican, Italian and African dishes.
             Although becoming a head Chef in a corporate company was a great achievement, Chef Foluke wants to bring that 5-star experience to your home. So rather if its your Anniversary for 2, Birthday, house warming party or family dinner, Chef Foluke would love to create the ultimate flavorful and colorful spread for your next gathering. Chef Foluke Olaoye now resides in Austin, but is willing to travel to you for a great experience.
            </p>
        </div>
      </article>
      </body>
    );
  }
  
  export default About;
