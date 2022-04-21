import React from "react";
import Recipe1 from "../images/perfectparfait.jpg";
import Recipe2 from "../images/gritsshrimp.jpg";
import Recipe3 from "../images/mixedberrysalad.jpg";

function Recipes() {

  return (
    <section>
      <div className="row">
        <div className="column" id="recipe-lists">
          <h1>Perfect Parfait</h1>
          <br></br>
          <div>
            <img
              src={Recipe1}
              id="recipeimg"
              className="my-2"
              style={{ height: "auto", width: "33%", borderRadius: "5px" }}
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
        <div className="column" id="recipe-lists">
          <h1>Grits & Shrimp</h1>
          <br></br>
          <div>
            <img
              src={Recipe2} /* will change to recipe2 */
              id="recipeimg"
              className="my-2"
              style={{ height: "33%", width: "33%", borderRadius: "5px" }}
            />
          </div>
          <ul>
            <h3>Grits:</h3>
            <li>2 cups (473 mL) chicken stock or broth, low sodium</li>
            <li>2 cups (473 mL) whole milk</li>
            <li>1 cup (197 g) stone-ground grits</li>
            <li>3 tablespoon (42 g) unsalted butter</li>
            <li>2 cups (226 g) sharp white cheddar, shredded</li>
            <h3>Shrimp:</h3>
            <li>½ lb thick-cut bacon</li>
            <li>2 lbs large shrimp (15-20 count), peeled and de-veined</li>
            <li>½ teaspoon red pepper flakes</li>
            <li>1 large garlic clove, minced</li>
            <li>Juice of ½ lemon</li>
            <li>Kosher salt and Freshly Cracked Black Pepper</li>
            <li>1 teaspoon chopped parsley</li>
          </ul>
        </div>
        <div className="column" id="recipe-lists">
          <h1>Mixed Berry Salad</h1>
          <br></br>
          <div>
            <img
              src={Recipe3} /* will change to recipe3 */
              id="recipeimg"
              className="my-2"
              style={{ height: "33%", width: "33%", borderRadius: "5px" }}
            />
          </div>
          <ul>
            <li>Feta</li>
            <li>Spinach and free greens mix</li>
            <li>Blueberries, Strawberries, & Cranberries</li>
            <li>Balsamic Reduction</li>
            <li>Candid pecans</li>
            <li>Optional: Berry vinaigrette dressing</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Recipes