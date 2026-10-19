import '../styles/pages.css'

export default function Contacts() {
  return (
    <div className="page-container">
      <h1>Контакты</h1>
      <div className="contact-list">
        <div className="contact-item"><strong>Адрес:</strong> г. Москва, ул. Программистов, д. 1</div>
        <div className="contact-item"><strong>Телефон:</strong> +7 (999) 000-00-00</div>
        <div className="contact-item"><strong>Email:</strong> info@academy-code.ru</div>
        <div className="contact-item"><strong>Соцсети:</strong> Telegram, VK, YouTube</div>
      </div>
      <aside className="contact-notice"><p>💡 <strong>Важно:</strong> Для связи лучше использовать Telegram — отвечаем быстрее всего!</p></aside>
    </div>
  )
}
