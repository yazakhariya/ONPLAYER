// import * as React from 'react'
import s from './NavBurger.module.css'

type Props = {
  closeBurgerFn?: () => void
}

export default function NavBurger({ closeBurgerFn }: Props) {
  return (
    <div onClick={closeBurgerFn} className={s.nav__burger}>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
      <span className={s.burger__line}></span>
    </div>
  )
}
