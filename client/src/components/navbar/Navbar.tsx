import { NavLink } from "react-router-dom";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <NavLink to="/series" className={style.link}>
        <h1 className={style.logo}>Manga Sphere</h1>
      </NavLink>
      <div className={style.container}>
        <NavLink to="/series" className={style.link}>
          <button type="button" className={style.button}>
            Mangas
          </button>
        </NavLink>
        <NavLink to="/favoris" className={style.link}>
          <button type="button" className={style.button}>
            Favoris
          </button>
        </NavLink>
        <NavLink to="/admin" className={style.link}>
          <button type="button" className={style.button}>
            Admin
          </button>
        </NavLink>
      </div>
    </nav>
  );
}
