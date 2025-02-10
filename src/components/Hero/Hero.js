import './Hero.css';
import imgSrc from '../../assets/IMG.svg';

function Hero() {
  return (
    <div className="hero">
      <div className="description">
        Гармонійні відносини з їжею,<br />
        здоров'я та бажаний зовнішній<br />
        вигляд — все це можливо разом<br />
        з експертом в області харчування!
      </div>

      <button className="cta-button">
        ( Обрати послугу )
      </button>

      <div className="name-container">
        <span className="special-letter">Ю</span>ЛІЯ ПАРФЕН
        <span className="special-letter">О</span>ВА
      </div>
      <img alt="svg" className="logo-image" src={imgSrc} />
    </div>
  );
}

export default Hero; 