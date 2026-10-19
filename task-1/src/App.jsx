import { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'

const pages = { home: Home, about: About, contacts: Contacts }

export default function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const Page = pages[currentSection]

  return (
    <div className="app">
      <a className="skip-link" href="#content">К содержанию</a>
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />
      <main id="content" tabIndex={-1}><Page /></main>
      <footer>© 2023 Академия Кода. Учебный проект.</footer>
    </div>
  )
}
