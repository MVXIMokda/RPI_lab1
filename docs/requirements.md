# Требования лабораторной №1

Проверены по презентации «ЛР №1.pptx» (6 слайдов), предоставленной пользователем, и по ссылке с последнего слайда.

## Состав работы

Слайды 2–5 показывают подготовку окружения, создание компонента Text, CSS Modules и `:hover`.
На слайде 6 сформулированы два самостоятельных задания лабораторной №1.

### Задание №1

Источник: https://github.com/SaitBakhteev/RPI_LR_1/blob/main/task_1.md

| Требование | Реализация |
| --- | --- |
| `src/components/Navbar/` | `task-1/src/components/Navbar/Navbar.jsx`, `Navbar.css` |
| `src/pages/`: Home, About, Contacts | Три отдельных файла в `task-1/src/pages/` |
| `src/styles/` | `global.css`, `pages.css` |
| Навигация в Navbar | `currentSection` и callback `onNavigate` передаются через props |
| В App — состояние и условное отображение | `useState`, объект `pages`, компонент `Page` |
| Удалить объект styles и inline-стили | Оформление полностью в CSS |
| Наведение через `:hover` | `global.css`, `Navbar.css` |
| Без сторонних React-библиотек | Только React и React DOM; Vite/ESLint — инструменты разработки |

### Задание №2

Тема: краткое описание известного деятеля. Выбран Алан Мэтисон Тьюринг.

| Требование | Реализация |
| --- | --- |
| Минимум два React-компонента | PersonCard, Biography, Navigation |
| Блок описания: биография, деятельность, достижения | Biography |
| Блок ФИО, фото и внешней ссылки «Подробнее» | PersonCard |
| Собственная папка с `.jsx` и `.css` для каждого блока | `src/components/PersonCard/`, `Biography/`, `Navigation/` |
| Первый элемент списка выделен только псевдоклассом | `.works-list li:first-child` в Biography.css |
| Навигация по разделам | `#biography`, `#work`, `#recognition` |
| Обработка события клика | Раскрытие наград и подробностей, переключение темы |
| Светлая/тёмная тема | CSS-переменные, `data-theme`, React state, localStorage |
| Опционально: видимость деталей биографии | Кнопка «Читать подробнее» |

Сайт «Учебная платформа» из https://github.com/bbbAt0n/React_Site имеет другую тему и не заменяет задание №2 этой лабораторной.
