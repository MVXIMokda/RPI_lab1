import { useEffect, useState } from 'react'
import PersonCard from './components/PersonCard/PersonCard.jsx'
import Biography from './components/Biography/Biography.jsx'
import Navigation from './components/Navigation/Navigation.jsx'

function initialTheme() {
  try {
    const saved = localStorage.getItem('turing-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch { /* При запрете localStorage тема работает до перезагрузки. */ }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('turing-theme', theme) } catch { /* Не блокируем интерфейс. */ }
  }, [theme])

  return (
    <>
      <a className="skip-link" href="#main">К содержанию</a>
      <Navigation theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main id="main" tabIndex={-1} className="page-layout">
        <PersonCard />
        <Biography />
      </main>
      <footer className="site-footer"><span>Люди и идеи</span><span>Биографический очерк · Алан Тьюринг</span><a href="#top">Наверх ↑</a></footer>
    </>
  )
}
