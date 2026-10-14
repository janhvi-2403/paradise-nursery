
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "./CartSlice";

const plantCategories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?w=400" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400" },
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { id: 5, name: "Rubber Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 6, name: "Boston Fern", price: 279, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
    ],
  },
  {
    name: "Succulents",
    plants: [
      { id: 7, name: "Echeveria", price: 199, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400" },
      { id: 8, name: "Jade Plant", price: 229, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 9, name: "Aloe Vera", price: 249, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 10, name: "Haworthia", price: 189, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400" },
      { id: 11, name: "Zebra Cactus", price: 219, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 12, name: "String of Pearls", price: 299, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
    ],
  },
  {
    name: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 599, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400" },
      { id: 14, name: "Calathea", price: 449, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 15, name: "Fiddle Leaf Fig", price: 699, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" },
      { id: 16, name: "Pothos", price: 249, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400" },
      { id: 17, name: "Philodendron", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400" },
      { id: 18, name: "ZZ Plant", price: 349, image: "https://images.unsplash.com/photo-1593482892290-f54927ae2b30?w=400" },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isInCart = (id) =>
    cartItems.some((item) => item.id === id);

  return (
    <div className="product-page" id="plants">
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">🛒 Cart ({totalItems})</Link>
      </nav>

      <header className="product-header">
        <h1>Paradise Nursery Plants</h1>
        <p>Bring home a little piece of paradise.</p>
      </header>

      {plantCategories.map((category) => (
        <section className="plant-category" key={category.name}>
          <h2>{category.name}</h2>

          <div className="plant-grid">
            {category.plants.map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img
                  src={plant.image}
                  alt={plant.name}
                  className="plant-image"
                />

                <h3>{plant.name}</h3>
                <p className="plant-price">
                  ₹{plant.price.toFixed(2)}
                </p>

                <button
                  onClick={() => dispatch(addItem(plant))}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
