import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Recipe1 from "../images/Morningfuel.jpg";
import Recipe2 from "../images/NYStrip.jpg";
import Recipe3 from "../images/Snowcrablegs.jpg";
import Recipe4 from "../images/veggiemixedsalad.jpg";
import Recipe5 from "../images/wholesnapper.jpg";

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={5}
      >
        <div id="main-container">
          <Slider>
            <Slide index={0}>
              <div id="content">
                <br></br>
                <img
                  className="homeLeft"
                  src={Recipe1}
                  id="recipeimg"
                  style={{ height: "33%", width: "33%", borderRadius: "5px" }}
                />
                <div className="homeRight">
                  <h1>Morning Fuel</h1>
                  <br></br>
                  <h3>
                    Overnight oats soaked in coconut milk, cinnamon and raw
                    honey topped with fresh berries and granola. Let's not skip
                    the most important meal of the day!
                  </h3>
                </div>
              </div>
            </Slide>
            <Slide index={1}>
              <div id="content">
                <br></br>
                <img
                  className="homeLeft"
                  src={Recipe2}
                  id="recipeimg"
                  style={{ height: "33%", width: "33%", borderRadius: "5px" }}
                />
                <div className="homeRight">
                  <h1>NY Strip</h1>
                  <br></br>
                  <h3>
                    NY Strip Steak topped with blistered tomatoes and a side of
                    roasted marble and sweet potato hash with a sunny side up
                    egg and everything aoli drizzle!
                  </h3>
                </div>
              </div>
            </Slide>
            <Slide index={2}>
              <div id="content">
                <br></br>
                <img
                  className="homeLeft"
                  src={Recipe3}
                  id="recipeimg"
                  style={{ height: "33%", width: "33%", borderRadius: "5px" }}
                />
                <div className="homeRight">
                  <h1>Snow Crab Legs</h1>
                  <br></br>
                  <h3>
                    Roasted garlic marble potatoes with grilled red peppers,
                    zucchini and squash! Added citrus garlic butter. Great
                    dinner for any day of the week.
                  </h3>
                </div>
              </div>
            </Slide>
            <Slide index={3}>
              <div id="content">
                <br></br>
                <img
                  className="homeLeft"
                  src={Recipe4}
                  id="recipeimg"
                  style={{ height: "33%", width: "33%", borderRadius: "5px" }}
                />
                <div className="homeRight">
                  <h1>7-Veggie Mixed Salad</h1>
                  <br></br>
                  <h3>
                    7 veggie mixed salad with grilled salmon marinated in hot
                    honey, fresh garlic, soy sauce, scallions and S&P! Topped
                    with fresh tomatoes and scallions. If you're cutting carbs,
                    this dish is for you. Very flavorful dish!
                  </h3>
                </div>
              </div>
            </Slide>
            <Slide index={4}>
              <div id="content">
                <br></br>
                <img
                  className="homeLeft"
                  src={Recipe5}
                  id="recipeimg"
                  style={{ height: "33%", width: "33%", borderRadius: "5px" }}
                />
                <div className="homeRight">
                  <h1>Whole Snapper</h1>
                  <br></br>
                  <h3>
                    Dinner is served: whole snapper with sweet onions, shallots,
                    bell pepper trio, whole roasted garlic cloves, and thyme,
                    the fresh stuff not dried and some spices! Stewed spinach
                    wtih caramelized sweet onion, nutmeg and coconut milk! A
                    side of white rice with coconut milk as well. Dish is also
                    garnished with cilantro.
                  </h3>
                </div>
              </div>
            </Slide>
          </Slider>
        </div>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}