import React from "react";
import MultiplePizzas from "../Pictures/multiplePizzas.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Pedro's Pizzeria is a beloved pizzeria located in the heart of the city. We have been serving delicious, handcrafted pizzas to our valued customers since 1995. With a passion for quality ingredients and authentic flavors, we have become a go-to destination for pizza lovers of all ages.

At Pedro's Pizzeria, we take pride in our traditional pizza-making techniques. Our dough is made fresh daily, allowing it to rise to perfection and develop that irresistible crispy yet chewy texture. We use only the finest and freshest ingredients, carefully selected to ensure the highest quality and taste in every bite.

Our menu offers a wide variety of pizza options to cater to every palate. From classic Margherita to gourmet combinations featuring premium toppings, there is something for everyone at Pedro's Pizzeria. We also offer a selection of sides, salads, and desserts to complement your pizza experience.

In addition to our dine-in service, we provide convenient takeout and delivery options, so you can enjoy our mouthwatering pizzas wherever you are. Our friendly and dedicated staff is committed to providing exceptional customer service and ensuring your satisfaction with every order.

As a family-owned and operated business, Pedro's Pizzeria is deeply rooted in the community. We believe in giving back and supporting local initiatives. Through sponsorships, fundraisers, and partnerships, we strive to make a positive impact on the neighborhoods we serve.

We invite you to join us at Pedro's Pizzeria and indulge in the flavors that have made us a local favorite. Whether you're dining with family, grabbing a quick lunch, or hosting a special event, our warm and welcoming atmosphere is perfect for any occasion. Experience the passion, dedication, and love for pizza that define Pedro's Pizzeria.

Thank you for choosing Pedro's Pizzeria. We look forward to serving you and creating memorable pizza moments together.
        </p>
      </div>
    </div>
  );
}

export default About;