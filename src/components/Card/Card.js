import React from "react";
import FavoriteGoods from "../FavoriteGoods/FavoriteGoods";
import "./Card.scss";

const Card = ({ product }) => {
  const { name, price, images, group, discount } = product;

  const originalPrice = Math.round(
    discount > 0 ? (price / (1 - discount / 100)).toFixed(2) : null
  );
    const imagePath = process.env.REACT_APP_IMAGE_PATH;

  return (
      <div className="card">
          <div className="card-image">
              <img src={`${imagePath}${images[0]}`} alt={name} loading={"lazy"}/>
              <FavoriteGoods itemId={product.id}/>
          </div>
          <div className="card-content">
              <h3 className="card-title">{name}</h3>
              <p className="card-category">{group}</p>
              <div className="card-price">
          <span
              className={`card-price-current ${discount > 0 ? "discounted" : ""}`}
          >
            {price}$
          </span>
                  {discount > 0 && (
                      <span className="card-price-original">{originalPrice}$</span>
                  )}
              </div>
          </div>
      </div>
  );
};

export default Card;
