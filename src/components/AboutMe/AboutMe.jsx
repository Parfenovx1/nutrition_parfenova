import React from 'react';
import './AboutMe.css';
import AboutMeImg from '../../assets/AboutMeImg.svg';

function AboutMe() {
  return (
    <div className="about-me page-block">
      <div className="about-me-content">
        <div className="about-me-left">
          <h2 className="about-me-title">
            <span>Mене звати Юлія Парфенова,</span><br/>
            <span className="certified">я сертифікований</span><br/>
            <span>нутриціолог, фуд-терапевт</span>
          </h2>
          
          <p className="association-text">
            а також член Незалежної Асоціації Нутриціологів та Дієтологів України «НАНДУ»
          </p>
          
          <div className="about-me-description">
            <p>Від незбалансованого харчування та поганої роботи всіх процесів в організмі, страждає якість нашого життя та скорочується його тривалість. Так чому б не змінити це?</p>
            <p>Моя мета — допомагати вам покращувати своє здоровʼя через індивідуальні рекомендації. Я впевнена, що вони допоможуть вам змінити життя на краще і готова супроводжувати вас на цьому шляху до змін!</p>
          </div>
          
          <button className="education-button">Детальніше про освіту</button>
        </div>
        
        <div className="about-me-right">
          <span className="about-me-label">( про мене )</span>
          <img src={AboutMeImg} alt="About Me" className="about-me-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe; 