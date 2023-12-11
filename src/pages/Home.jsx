import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/allProducts/allProductSlice";
import Loading from "../components/loading/Loading";
import Electronics from "../assets/images/electronics-logo.svg";
import Description from "../assets/images/sub-description.svg";
import ViewAllProducts from "../assets/images/view-all-products.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import ProductLogo from "../assets/images/product-logo.svg";
import { getProduct } from "../features/product/productSlice";
import ProductSlider from "../components/card/ProductSlider";
const Home = () => {
  const { isLoading, products } = useSelector((store) => store.allProducts);

  const dispatch = useDispatch();

  const productsToDisplay = products.slice(0, 6);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <img
                src={Electronics}
                alt="Electronics"
                className="main-heading"
              />
              <img
                src={Description}
                alt="Description"
                className="sub-heading"
              />
              <Link to="/product-list">
                <img
                  src={ViewAllProducts}
                  alt="ViewAllProducts"
                  className="view-all-products"
                />
              </Link>

              <ProductSlider />
            </div>
          </div>
        </section>
        {/* PRODUCT SECTION  */}
        <section className="section-product">
          <div className="product">
            <div className="product-box">
              <img
                src={ProductLogo}
                className="product-logo"
                alt="product-logo"
              />
              <div className="container grid grid--3--cols margin-bottom-md">
                {productsToDisplay &&
                  productsToDisplay.map((product) => {
                    const { id, brand, title, thumbnail } = product;
                    return (
                      <div className="products" key={id}>
                        <div className="product-content">
                          <div className="product-header">
                            <p className="product-header-title">{brand}</p>
                            <ion-icon name="heart-outline"></ion-icon>
                          </div>
                          <img
                            src={thumbnail}
                            alt={title}
                            className="product-img"
                            width={60}
                          />
                          <p className="product-title">{title}</p>
                          <div className="view-btn-container">
                            <Link
                              className="view-btn"
                              onClick={() => dispatch(getProduct(id))}
                              to={`/product-information/${id}`}
                            >
                              view
                              <img
                                src={RightArrow}
                                alt="RightArrow"
                                className="right-arrow"
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
