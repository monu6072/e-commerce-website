import React, { useState } from "react";

const productsData = [
  {
    id: 1,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt1.jpg",
    rating: 5,
    price: 90,
  },
  {
    id: 2,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt2.jpg",
    rating: 5,
    price: 100,
  },
  {
    id: 3,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt3.jpg",
    rating: 5,
    price: 80,
  },
  {
    id: 4,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt4.jpg",
    rating: 5,
    price: 120,
  },
  {
    id: 5,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt5.jpg",
    rating: 5,
    price: 110,
  },
  {
    id: 6,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt6.jpg",
    rating: 5,
    price: 70,
  },
  {
    id: 7,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt7.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 8,
    name: "Men's Printed Shirt",
    imageSrc: "image/shirt8.jpg",
    rating: 5,
    price: 90,
  },
];

function Product() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <section id="product1" className="section-p1 container mx-auto ms-auto">
        <h2>Featured products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container row overflow-auto container">
          {productsData.map((product) => (
            <div className="pro  col-lg-3 col-md-4 col-sm-6 border rounded-3 shadow" key={product.id}>
              <img  src={product.imageSrc} alt={product.name} className="rounded p-lg-3 img-fluid"/>
              <div className="des text-start text-nowrap col-lg-3 col-md-4 col-sm-6">
                <span>Max</span>
                <h5 className="product-name">{product.name}</h5>
                <div className="star">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <i key={index} className="fa fa-star checked"></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <button className="rounded-circle bag "  onClick={() => addToCart(product)}>
                <i className="fa fa-shopping-bag"></i>
              </button>
            </div>
          ))}
        </div>
      </section>
      <div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Product;
