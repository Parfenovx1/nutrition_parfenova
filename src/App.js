import './App.css';
import imgSrc from './assets/IMG.svg';

function App() {
  return (
    <div className="App">
      <div className="name-container">
        <span className="special-letter">Ю</span>ЛІЯ ПАРФЕН
        <span className="special-letter">О</span>ВА
      </div>
      <img alt="svg" className="logo-image" src={imgSrc} />
    </div>
  );
}

export default App;
