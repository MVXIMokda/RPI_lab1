import './PersonCard.css'

export default function PersonCard() {
  return (
    <aside className="person-card" aria-label="Алан Тьюринг: портрет и краткие сведения">
      <p className="eyebrow">Портрет учёного / 01</p>
      <figure className="portrait">
        <img src="./alan-turing.jpg" alt="Чёрно-белый портрет Алана Тьюринга, 1951 год" width="800" height="1067" fetchPriority="high" />
        <figcaption><span>Алан Тьюринг, 1951</span><span>Фото: Elliott & Fry</span></figcaption>
      </figure>
      <div className="person-facts">
        <p className="full-name">Алан Мэтисон Тьюринг</p>
        <p className="person-dates">1912 — 1954 · Великобритания</p>
        <p className="person-fields">Математика<br />Криптоанализ<br />Теория вычислений</p>
        <a className="external-link" href="https://ru.wikipedia.org/wiki/Тьюринг,_Алан" target="_blank" rel="noreferrer">Подробнее в Википедии <span aria-hidden="true">↗</span></a>
      </div>
    </aside>
  )
}
