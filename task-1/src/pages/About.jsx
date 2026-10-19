import '../styles/pages.css'

export default function About() {
  return (
    <div className="page-container">
      <h1>О нашей Академии</h1>
      <p className="text">Мы — команда опытных разработчиков, которые верят, что программирование должно быть понятным.
        Наша миссия — дать студентам не просто синтаксис, а инженерное мышление.</p>
      <section className="principles" aria-labelledby="principles-title">
        <h2 id="principles-title">Наши принципы:</h2>
        <ul><li>Практика важнее теории</li><li>Разбор реальных ошибок</li><li>Поддержка на каждом этапе</li></ul>
      </section>
    </div>
  )
}
