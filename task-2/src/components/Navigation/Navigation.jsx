import './Navigation.css'

export default function Navigation({ theme, onToggleTheme }) {
  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top">Люди <span>и</span> идеи<span className="wordmark-dot">.</span></a>
      <nav aria-label="Разделы биографии"><a href="#biography">Биография</a><a href="#work">Наука</a><a href="#recognition">Признание</a></nav>
      <button className="theme-toggle" type="button" onClick={onToggleTheme}
        aria-pressed={theme === 'dark'} aria-label="Тёмная тема">
        <span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span>
        {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
      </button>
    </header>
  )
}
