import React, { useState } from 'react';

const productData = [
  {
    id: 1,
    name: "Women's Printed Suits",
    image: "image/fashion1.jpg",
    rating: 5,
    price: 90,
  },
  {
    id: 2,
    name: "Women's Printed Suits",
    image: "image/fashion2.jpg",
    rating: 5,
    price: 100,
  },
  {
    id: 3,
    name: "Women's Printed Suits",
    image: "image/fashion3.jpg",
    rating: 5,
    price: 80,
  },
  {
    id: 4,
    name: "Women's Printed Suits",
    image: "image/fashion4.jpg",
    rating: 5,
    price: 120,
  },
  {
    id: 5,
    name: "Women's Printed Kurta",
    image: "image/fashion5.jpg",
    rating: 5,
    price: 110,
  },
  {
    id: 6,
    name: "Women's Printed Kurta",
    image: "image/fashion6.jpg",
    rating: 5,
    price: 70,
  },
  {
    id: 7,
    name: "Women's Printed Kurta",
    image: "image/fashion7.jpg",
    rating: 5,
    price: 50,
  },
  {
    id: 8,
    name: "Women's Printed Kurta",
    image: "image/fashion8.jpg",
    rating: 5,
    price: 90,
  },
];

function Product1() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <section id="product1" className="section-p1 container">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="pro-container row overflow-auto ">
          {productData.map((product) => (
            <div className="pro col-lg-3 col-md-4 col-sm-6 border shadow rounded-3" key={product.id}>
              <img  src={product.image} alt={product.name} className="rounded p-lg-3 img-fluid"/>
              <div className="des text-start text-nowrap col-lg-3 col-md-4 col-sm-6">
                <span>H&M</span>
                <h5 className='product-name'>{product.name}</h5>
                <div className="star">
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <i key={index} className="fa fa-star checked"></i>
                  ))}
                </div>
                <h4>${product.price}</h4>
              </div>
              <button className='rounded-circle bag' onClick={() => addToCart(product)}>
                <i className="fa fa-shopping-bag "></i>
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Display the shopping cart items here */}
    </div>
  );
}

export default Product1;
