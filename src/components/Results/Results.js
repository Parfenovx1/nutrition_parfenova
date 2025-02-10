import './Results.css';

function Results() {
  const results = [
    {
      id: 1,
      text: "Покращите стан своєї шкіри: зменшиться прояв акне, висипань та почервонінь на лиці",
      color: "#D2D1C6"
    },
    {
      id: 2,
      text: "Отримаєте регулярний цикл, позбудетеся гінекологічних проблем: ендометріозу, міом, кіст та інших",
      color: "#D2D1C6"
    },
    {
      id: 3,
      text: "У вас буде достатній рівень енергії, гарний настрій та самопочуття",
      color: "#D2D1C6"
    },
    {
      id: 4,
      text: "Покращите загальний стан волосся, позбудетеся від його постійного випадіння",
      color: "#D2D1C6"
    },
    {
      id: 5,
      text: "Мінімізуєте дискомфорт в ШКТ, покращите засвоєння нутрієнтів",
      color: "#D2D1C6"
    },
    {
      id: 6,
      text: "З чим я допомагаю?",
      color: "#D2D1C6"
    },
    {
      id: 7,
      text: "Зрозумієте як харчуватися збалансовано, смачно та без шкоди для здоров'я",
      color: "#052D23"
    },
  ];

  return (
    <div className="results-section">
      <h2>ЯКИЙ РЕЗУЛЬТАТ ВИ ОТРИМАЄТЕ ПІСЛЯ ВЗАЄМОДІЇ ЗІ МНОЮ:</h2>
      <div className="results-grid">
        {results.map((result) => (
          <div 
            key={result.id} 
            className="result-card"
            style={{ backgroundColor: result.color }}
          >
            <p>{result.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Results; 