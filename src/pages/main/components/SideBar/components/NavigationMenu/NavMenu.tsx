import * as React from 'react'
import s from './NavMenu.module.css'
import luna from 'src/assets/icons/Group 48096406.png'
import sun from 'src/assets/icons/Group 48096407.png'
import ThemeContext from './components/ThemeContext/ThemeContext'

type Props = {
  loggedIn: boolean
}

export default function NavMenu({ loggedIn }: Props) {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const handleThemeChanging = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className={s.nav__menu}>
      <ul className={s.menu__list}>
        <li className={s.menu__item}>
          <a href="http://127.0.0.1:5173/" className={s.menu__link}>
            Главное
          </a>
        </li>
        <li className={s.menu__item}>
          <a href="http://127.0.0.1:5173/favorites" className={s.menu__link}>
            Мой плейлист
          </a>
        </li>
        {loggedIn ? (
          <li className={s.menu__item}>
            <button className={s.menu__link}>
              Выйти
            </button>
          </li>
        ) : (
          <li className={s.menu__item}>
            <a href="http://localhost:3000/" className={s.menu__link}>
              Войти
            </a>
          </li>
        )}
        <div onClick={handleThemeChanging}>
          <img alt="Night Mode" src={theme === 'dark' ? luna : sun} />
        </div>
      </ul>
    </div>
  )
}
