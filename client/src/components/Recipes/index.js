import React from "react";
import Recipe1 from "../images/perfectparfait.jpg";
// import Recipe2 from "../images/.jpg";
// import Recipe3 from "../images/.jpg";

function Recipes() {

  return (
    <section>
      <div class="row">
        <div class="column">
          <h1>Perfect Parfait</h1>
          <div>
            <h1 id="recipe"></h1>
            <img
              src={Recipe1}
              id="recipeimg"
              className="my-2"
              style={{ height: "auto", width: "33%" }}
            />
          </div>
          <ul>
            <li>3/4 cups of cooked tri-color quinoa</li>
            <li>4 oz of vanilla greek yogurt</li>
            <li>1/2 pint of fresh mixed berries</li>
            <li>2 tbsp of confection sugar</li>
            <li>1 tbsp of honey</li>
            <li>1 tbsp of raw oats</li>
          </ul>
        </div>
        <div class="column">
          <h1>Recipe #2</h1>
          <div>
            <h1 id="recipe"></h1>
            <img
              src={Recipe1} /* will change to recipe2 */
              id="recipeimg"
              className="my-2"
              style={{ height: "auto", width: "33%" }}
            />
          </div>
          <ul>
            <li>3/4 cups of cooked tri-color quinoa</li>
            <li>4 oz of vanilla greek yogurt</li>
            <li>1/2 pint of fresh mixed berries</li>
            <li>2 tbsp of confection sugar</li>
            <li>1 tbsp of honey</li>
            <li>1 tbsp of raw oats</li>
          </ul>
        </div>
        <div class="column">
          <h1>Recipe #3</h1>
          <div>
            <h1 id="recipe"></h1>
            <img
              src={Recipe1} /* will change to recipe3 */
              id="recipeimg"
              className="my-2"
              style={{ height: "auto", width: "33%" }}
            />
          </div>
          <ul>
            <li>3/5 cups of cooked tri-color quinoa</li>
            <li>4 oz of vanilla greek yogurt</li>
            <li>1/2 pint of fresh mixed berries</li>
            <li>2 tbsp of confection sugar</li>
            <li>1 tbsp of honey</li>
            <li>1 tbsp of raw oats</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recipes
