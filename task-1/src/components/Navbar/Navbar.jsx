import './Navbar.css'

const links = [
  { id: 'home', title: 'Главная' },
  { id: 'about', title: 'О нас' },
  { id: 'contacts', title: 'Контакты' },
]

export default function Navbar({ currentSection, onNavigate }) {
  return (
    <nav className="navbar" aria-label="Основная навигация">
      <div className="nav-buttons">
        {links.map(({ id, title }) => (
          <button key={id} type="button"
            className={`button nav-button${currentSection === id ? ' active' : ''}`}
            aria-current={currentSection === id ? 'page' : undefined}
            onClick={() => onNavigate(id)}>{title}</button>
        ))}
      </div>
    </nav>
  )
}
