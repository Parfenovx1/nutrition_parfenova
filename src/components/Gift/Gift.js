import React from "react";
import "./Gift.css";
import certificate from "../../assets/Certificate.svg";

function Gift() {
  return (
    <section className="gift">
      <p className="gift-label">( подарунковий сертифікат )</p>
      <div className="gift-container">
        <div className="gift-content">
          <h2 className="gift-title">
            <span className="gift-title-main">ПРИДБАЙТЕ ПОСЛУГУ</span>
            <span className="gift-title-accent">В ПОДАРУНОК!</span>
          </h2>

          <p className="gift-description">
            Сертифікат на будь-яку послугу від нутриціолога – це найкращий прояв
            турботи та любові для близької людини.
          </p>

          <p className="gift-button">( Замовити )</p>
        </div>

        <div className="gift-certificate">
          <img
            src={certificate}
            alt="Gift certificate"
            className="gift-certificate-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Gift;
