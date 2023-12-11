import React from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./slider.css";

const ProductSlider = () => {
  const { products } = useSelector((store) => store.allProducts);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="product-carousel">
      <Carousel
        responsive={responsive}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        <div
          style={{
            display: "flex",
            gap: "4.6rem",
            justifyContent: "space-between",
          }}
        >
          {products &&
            products.map((product) => {
              const { id, brand, title, thumbnail, price, rating } = product;
              const stars = Math.floor(rating);
              return (
                <div className="mycard" key={id}>
                  <div className="mycard-items">
                    <img src={thumbnail} alt={title} width={60} />

                    <h4 className="mycard-brand">{brand}</h4>
                    <p className="mycard-title">{title}</p>
                    <p className="mycard-price">Rs {price}.00</p>
                    <p className="mycard-rating">
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
                  </div>
                </div>
              );
            })}
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
