import React from "react";
import "./Reviews.css";
import reviewsImage from "../../assets/Reviews.svg";

function Reviews() {
  return (
    <section className="reviews">
      <p className="reviews-label">( відгуки )</p>

      <div className="reviews-container">
        <h2 className="reviews-title">
          КРАЩЕ ЗА МЕНЕ
          <br />
          РОЗКАЖУТЬ <span className="reviews-title-accent">МОЇ КЛІЄНТИ</span>:
        </h2>
        <div className="reviews-content">
          <img
            src={reviewsImage}
            alt="Client reviews and transformations"
            className="reviews-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
