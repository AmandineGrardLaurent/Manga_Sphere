import banner from "../../assets/images/banner_demon_slayer.jpg";
import Register from "../../components/register/Register";
import style from "./registerPage.module.css";

export default function RegisterPage() {
  return (
    <>
      <div className={style.logo}>
        <h1>Manga Sphere</h1>
      </div>
      <section className={style.container}>
        {" "}
        <article className={style.image}>
          <img
            src={banner}
            alt="banner demon slayer"
            className={style.banner}
          />
        </article>
        <article className={style.register}>
          <Register />
        </article>
      </section>
    </>
  );
}
