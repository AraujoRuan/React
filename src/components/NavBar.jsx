import { NavLink } from 'react-router'

import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
      Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink 
          to="/"
          className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
            </NavLink>
          <NavLink 
          to="/login"
          className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Entrar
          </NavLink>
          <NavLink 
          to="/register"
          className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Cadastro
          </NavLink>
          <NavLink 
          to="/about"
          className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar
