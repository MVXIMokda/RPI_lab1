import '../styles/pages.css'

const courses = [
  ['React JS', 'Изучите создание SPA приложений и работу с состоянием.', 'https://react.dev/learn'],
  ['CSS & Layouts', 'Освойте верстку, Flexbox, Grid и адаптивность.', 'https://developer.mozilla.org/ru/docs/Web/CSS'],
  ['JavaScript Core', 'База языка: типы данных, замыкания, асинхронность.', 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide'],
]

export default function Home() {
  return (
    <div className="page-container">
      <h1>Добро пожаловать в Академию Кода</h1>
      <p className="text">Мы обучаем современным технологиям с нуля до PRO.</p>
      <div className="course-grid">
        {courses.map(([title, description, url]) => (
          <article className="course-card" key={title}>
            <h2>{title}</h2><p>{description}</p>
            <a className="button" href={url} target="_blank" rel="noreferrer" aria-label={`Подробнее: ${title} (новая вкладка)`}>Подробнее</a>
          </article>
        ))}
      </div>
    </div>
  )
}
