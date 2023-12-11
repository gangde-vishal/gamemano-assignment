import React from "react";
import ProductDetailLogo from "../assets/images/product-details.svg";
import LeftArrow from "../assets/images/left-arrow.svg";
import RightArrow from "../assets/images/right-arrow.svg";
import { useSelector } from "react-redux";
import Loading from "../components/loading/Loading";

const ProductInfo = () => {
  const { isLoading, product } = useSelector((store) => store.product);
  const productSubImages = product.images.slice(0, 4);
  const stars = Math.floor(product.rating);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <section className="section-product-details">
        <div className="product-details">
          <div className="product-details-box">
            <img
              src={ProductDetailLogo}
              alt="product-detail-logo"
              className="product-detail-logo"
            />
          </div>
        </div>
      </section>
      {product && (
        <section className="section-product-info">
          <div className="product-details">
            <div className="product-name">
              <h3 className="product-heading">{product.title}</h3>

              <div className="container grid grid--1--cols margin-bottom-md">
                <div className="product-details-container">
                  <div className="product-content">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="product-thumbnail"
                    />
                  </div>
                  <div className="product-info">
                    <p className="product-title">{product.title}</p>
                    <p className="product-rating">
                      {Array.from(Array(5), (e, index) => {
                        if (stars !== index) {
                          return <ion-icon key={index} name="star"></ion-icon>;
                        } else {
                          return (
                            <ion-icon
                              key={index}
                              name="star-outline"
                            ></ion-icon>
                          );
                        }
                      })}
                    </p>
                    <p className="product-description">{product.description}</p>
                    <h3 className="product-price">Price: Rs {product.price}</h3>
                    <h3 className="product-discount">
                      Discount: {product.discountPercentage}%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image-card-container">
            {productSubImages.map((img) => {
              return (
                <div className="image-card">
                  <img
                    src={img}
                    alt="product-images"
                    className="product-images"
                  />
                </div>
              );
            })}
          </div>
          <div className="icon-container">
            <img src={LeftArrow} alt="LeftArrow" className="left-icon" />
            <img src={RightArrow} alt="RightArrow" className="right-icon" />
          </div>
        </section>
      )}
    </>
  );
};

export default ProductInfo;
