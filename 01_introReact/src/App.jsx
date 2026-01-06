import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Місто Рівне</h1>
      <p><strong>Країна:</strong> Україна 🇺🇦</p>
      <p><strong>Рік заснування:</strong> 1283</p>

      <h2>Коротка інформація</h2>
      <p>
        Рівне — обласний центр Рівненської області, розташований на заході України.
        Місто має багату історію, культурні пам’ятки та сучасну інфраструктуру.
      </p>
      <div>
      <h2>Улюблена книга</h2>

      <p><b>Назва:</b> Гаррі Поттер і філософський камінь</p>
      <p><b>Автор:</b> Джоан Роулінг</p>
      <p><b>Жанр:</b> Фентезі</p>
      <p><b>Кількість сторінок:</b> 320</p>

      <h4>Рецензії:</h4>
      <ul>
        <li>Цікава та захоплива історія</li>
        <li>Добре підходить для підлітків</li>
        <li>Книга, яку хочеться перечитувати</li>
      </ul>
    </div>
    <div>
      <h2>Улюблений фільм</h2>

      <p><b>Назва:</b> Інтерстеллар</p>
      <p><b>Режисер:</b> Крістофер Нолан</p>
      <p><b>Рік випуску:</b> 2014</p>
      <p><b>Кіностудія:</b> Paramount Pictures</p>
    </div>
    <div>
      <h2>Персональна сторінка</h2>
      <p><b>ПІБ:</b> Войтович Дмитро Васильович</p>
      <p><b>Телефон:</b> +380634310413</p>
      <p><b>Email:</b> dmimtrovojtovic8@gmail.com</p>
      <p><b>Місто:</b> Рівне</p>

      <p><b>Навички:</b></p>
      <ul>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
