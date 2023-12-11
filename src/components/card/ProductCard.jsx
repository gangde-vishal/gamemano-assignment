import React from "react";

const ProductCard = ({ id, brand, title, thumbnail, price, rating }) => {
  const stars = Math.floor(rating);

  return (
    <div className="mycard">
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
              return <ion-icon key={index} name="star-outline"></ion-icon>;
            }
          })}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
