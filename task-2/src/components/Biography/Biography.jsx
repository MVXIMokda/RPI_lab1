import { useState } from 'react'
import './Biography.css'

const works = [
  { year: '1936', name: 'О вычислимых числах', description: 'Абстрактная вычислительная машина и границы алгоритмического решения задач.' },
  { year: '1950', name: 'Вычислительные машины и разум', description: 'Игра в имитацию как способ обсуждать машинный интеллект.' },
  { year: '1952', name: 'Химические основы морфогенеза', description: 'Математическая модель возникновения структур в живой природе.' },
]

export default function Biography() {
  const [showDetails, setShowDetails] = useState(false)
  const [showHonours, setShowHonours] = useState(false)

  return (
    <article className="biography">
      <div className="intro">
        <p className="eyebrow">История вычислительной мысли</p>
        <h1>Алан<br /><em>Тьюринг</em><span className="title-dot">.</span></h1>
        <p className="intro-text">Математик, который помог определить,<br className="desktop-break" /> что значит «вычислять».</p>
        <p className="intro-note">От абстрактной машины до вопроса о машинном интеллекте.</p>
      </div>

      <section className="bio-section" id="biography" aria-labelledby="biography-title">
        <div className="section-heading"><span className="section-number">01</span><h2 id="biography-title">Биография</h2></div>
        <p>Алан Мэтисон Тьюринг родился 23 июня 1912 года. В 1931 году он поступил в Королевский колледж Кембриджского университета, где изучал математику. Позднее продолжил исследования в Принстоне.</p>
        <p>Во время Второй мировой войны работал в Блетчли-парке в команде, занимавшейся расшифровкой сообщений «Энигмы». После войны участвовал в развитии вычислительной техники.</p>
        <button type="button" className="text-button" aria-expanded={showDetails} aria-controls="biography-details" onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Свернуть подробности' : 'Читать подробнее'} <span aria-hidden="true">{showDetails ? '−' : '+'}</span>
        </button>
        <div id="biography-details" className="biography-details" hidden={!showDetails}>
          <p>В 1934 году Тьюринг окончил Кембридж с отличием, а в 1935 году стал научным сотрудником Королевского колледжа. В 1938 году вернулся из Принстона со степенью PhD.</p>
          <p>После войны работал в Национальной физической лаборатории, затем — в Манчестерском университете. В начале 1950-х исследовал математические механизмы образования форм в живой природе.</p>
        </div>
      </section>

      <section className="bio-section" id="work" aria-labelledby="work-title">
        <div className="section-heading"><span className="section-number">02</span><h2 id="work-title">Идеи, которые остались</h2></div>
        <p>Его работы связывают математику, вычисления и изучение мышления. Три публикации показывают широту этих интересов.</p>
        <ol className="works-list">
          {works.map(({ year, name, description }) => <li key={year}><span className="work-year">{year}</span><div><h3>{name}</h3><p>{description}</p></div></li>)}
        </ol>
      </section>

      <section className="bio-section" id="recognition" aria-labelledby="recognition-title">
        <div className="section-heading"><span className="section-number">03</span><h2 id="recognition-title">Признание</h2></div>
        <p>Его вклад в криптоанализ и науку получил государственное и академическое признание.</p>
        <button className="honours-button" type="button" aria-expanded={showHonours} aria-controls="honours-list" onClick={() => setShowHonours(!showHonours)}>
          {showHonours ? 'Скрыть награды и звания' : 'Показать награды и звания'} <span aria-hidden="true">{showHonours ? '−' : '↗'}</span>
        </button>
        <ul className="honours-list" id="honours-list" hidden={!showHonours}>
          <li><strong>1946</strong><span>Офицер ордена Британской империи (OBE).</span></li>
          <li><strong>1951</strong><span>Избрание членом Лондонского королевского общества.</span></li>
        </ul>
      </section>

      <section className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Источники и материалы</h2>
        <a href="https://turingarchive.kings.cam.ac.uk/about-alan-turing" target="_blank" rel="noreferrer">Цифровой архив Королевского колледжа ↗</a>
        <a href="https://www.turing.ac.uk/blog/alan-turings-legacy-troubled-times" target="_blank" rel="noreferrer">Институт Алана Тьюринга: научное наследие ↗</a>
        <a href="https://commons.wikimedia.org/wiki/File:Alan_Turing_(1951).jpg" target="_blank" rel="noreferrer">Портрет: Elliott & Fry, 1951 · Wikimedia Commons ↗</a>
      </section>
    </article>
  )
}
