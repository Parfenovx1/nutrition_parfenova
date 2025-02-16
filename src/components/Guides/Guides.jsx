import React, { useState } from "react";
import "./Guides.css";
import Guide1 from "../../assets/Guide1.svg";
import Guide2 from "../../assets/Guide2.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrow-right.svg";

function Guides() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 2;

  const guides = [
    {
      id: 1,
      image: Guide1,
      title: "ТЕСТ\n(на)\nЗНИЖЕНУ\nКИСЛОТНІСТЬ\nШЛУНКОВОГО СОКУ",
    },
    { id: 2, image: Guide2, title: "Guide 2" },
  ];

  const nextSlide = () => {
    setCurrentSlide((current) => (current === totalSlides ? 1 : current + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((current) => (current === 1 ? totalSlides : current - 1));
  };

  const currentGuide = guides.find((guide) => guide.id === currentSlide);

  return (
    <div className="guides">
      <span className="guides-label">( гайди )</span>

      <div className="guides-header">
        <h2 className="guides-title">
          Я ПІДГОТУВАЛА ДЛЯ ВАС{" "}
          <span className="italic-text">БЕЗКОШТОВНІ ГАЙДИ</span>, ЩОБ ВИ ЗМОГЛИ
          <br />
          РОЗПОЧАТИ СВІЙ ШЛЯХ ДО ЗДОРОВ'Я ПРЯМО ЗАРАЗ!
        </h2>
      </div>

      <div className="guides-content">
        <div className="slide-numbers">
          <span className="number-left">(01/</span>
          <div className="guide-card">
            <img src={currentGuide.image} alt={`Guide ${currentGuide.id}`} className="guide-image" />
            <div className="navigation-buttons">
              <button className="nav-button" onClick={prevSlide}>
                <ArrowLeft />
              </button>
              <button className="nav-button" onClick={nextSlide}>
                <ArrowRight />
              </button>
            </div>
          </div>
          <span className="number-right">02)</span>
        </div>

        <div className="download-hint">
          Для завантаження файлу натисніть на гайд ↗
        </div>
      </div>
    </div>
  );
}

export default Guides;
