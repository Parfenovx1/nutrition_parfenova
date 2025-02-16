import React from "react";
import "./Services.css";
import ServicesBG from "../../assets/ServicesBG.svg";

const Services = () => {
  return (
    <section className="services">
      <img src={ServicesBG} alt="" className="services-background" />

      <div className="services-content">
        <div className="services-text">
          <span className="services-label">( ПОСЛУГИ )</span>

          <div className="services-header">
            <h2>
              <span className="services-title-italic">
                Персональні консультації,
              </span>
              <span className="services-title-regular">
                які допоможуть вам покращити здоровʼя та якість життя!
              </span>
            </h2>
          </div>
        </div>

        <div className="services-cards">
          <div className="service-card">
            <div className="card-number">01</div>
            <h3 className="card-title">ІНТЕГРАТИВНА КОНСУЛЬТАЦІЯ</h3>
            <p className="card-description">
              Ведення протягом 2-ох тижнів з щоденною перевіркою вашого харчування та постійною підтримкою
            </p>
            <button className="learn-more-btn">Дізнатись більше</button>
          </div>

          <div className="service-card">
            <div className="card-number">02</div>
            <p className="card-subtitle">Індивідуальний супровід-</p>
            <h3 className="card-title">НАСТАВНИЦТВО</h3>
            <p className="card-description">
              Ведення протягом 1ого місяця з щоденною перевіркою вашого харчування, постійною підтримкою та додатковою інформацією
            </p>
            <button className="learn-more-btn">Дізнатись більше</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
