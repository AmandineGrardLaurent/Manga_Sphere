import banner from "../../assets/images/banner_demon_slayer.jpg";
import LoginForm from "../../components/loginForm/LoginForm";
import style from "./loginPage.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={style.logo}>
        <h1>Manga Sphere</h1>
      </div>
      <section className={style.container}>
        <article className={style.image}>
          <img
            src={banner}
            alt="banner demon slayer"
            className={style.banner}
          />
        </article>
        <article className={style.login}>
          <LoginForm />
        </article>
      </section>
    </>
  );
}
