import { NavLink } from 'react-router'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
      Mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar
