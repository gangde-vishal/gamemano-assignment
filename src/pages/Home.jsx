import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../custom-hook/useFetch";

const BASE_URL = "https://dummyjson.com/products";
const Home = () => {
  const { data } = useFetch("");
  console.log(data);
  return (
    <>
      {/* <div>
       <Link to="/">Home</Link>
       <Link to="/product-list">Product List</Link>
       <Link to="/product-information/1">Product Information</Link>
     </div> */}
      <main>
        <section class="section-hero">
          <div class="hero">
            <div class="hero-text-box">
              <h1 class="heading-primary">Logo Electronics</h1>
              <div class="hero-description-underline">
                <span class="line"></span>
                <p class="hero-description">The techies you love</p>
                <span class="line"></span>
              </div>
              <a href="#try-for-free" class="btn btn--primary margin-right-sm">
                view all products
                <ion-icon
                  name="arrow-forward-outline"
                  class="arrow-icon"
                ></ion-icon>
              </a>
            </div>
          </div>
        </section>
        <section class="slider">
          <div class="image-slider">
            <div className="slide">
              <button>prev</button>
              <div class="card">
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <p></p>
              </div>
              <div class="card">
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Keyboard</h1>
                <p class="price">$19.99</p>
                <p></p>
              </div>
              <div class="card">
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Desktop</h1>
                <p class="price">$19.99</p>
                <p></p>
              </div>
              <div class="card">
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Headphone</h1>
                <p class="price">$19.99</p>
                <p></p>
              </div>
              <button>next</button>
            </div>
          </div>
        </section>
        <section class="products">
          <h1 class="heading-secondary">Products</h1>
          <div class="card-products">
            <div className="col">
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <button class="view-product">View</button>
              </div>
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <button class="view-product">View</button>
              </div>
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>

                <button class="view-product">View</button>
              </div>
            </div>
            <div className="col">
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <button class="view-product">View</button>
              </div>
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <button class="view-product">View</button>
              </div>
              <div class="card-details">
                <div class="saved">
                  <p>RUBI 128k</p>
                  <ion-icon name="heart-outline"></ion-icon>
                </div>
                <img
                  src="/w3images/jeans3.jpg"
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>Apple</h1>
                <p class="price">$19.99</p>
                <button class="view-product">View</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
