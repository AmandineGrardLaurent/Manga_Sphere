import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <h1 className={style.logo}>Manga Sphere</h1>
      <div className={style.container}>
        <button type="button" className={style.button}>
          Mes favoris
        </button>
        <button type="button" className={style.button}>
          Mon compte
        </button>
      </div>
    </nav>
  );
}
