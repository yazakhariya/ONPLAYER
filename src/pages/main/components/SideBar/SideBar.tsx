import * as React from 'react'
import s from './SideBar.module.css'
// import logo from 'src/assets/icons/logo.png'
// import darklogo from 'src/assets/icons/logo-black.png'
import NavBurger from './components/NavigationBurger/NavBurger';
import NavMenu from './components/NavigationMenu/NavMenu';

export default function SideBar() {
  const [dropdownState, setDropdownState] = React.useState<boolean>(false);
  const [navActive, setNavActive] = React.useState<boolean>(false);

    const handleDropdownClick = () => {
          setNavActive(true);
          setDropdownState(!dropdownState);
          if(navActive){
            setDropdownState(false);
            setNavActive(false);
          }
    };

    return (
      <nav className={!navActive ? s.main__nav : s.main__nav_active}>
            <div className={s.nav__logo}>
              <img alt='Логотип' className={s.logo__image} />
            </div> 
            <NavBurger closeBurgerFn={handleDropdownClick} />
            {dropdownState && (<NavMenu loggedIn={false} />)}        
      </nav>
    )
}
