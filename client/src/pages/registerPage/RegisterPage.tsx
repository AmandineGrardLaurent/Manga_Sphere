import banner from "../../assets/images/banner_demon_slayer.jpg";
import Register from "../../components/register/Register";
import style from "./registerPage.module.css";

export default function RegisterPage() {
  return (
    <section className={style.container}>
      <div>
        <h1 className={style.logo}>Manga Sphere</h1>
      </div>
      <img src={banner} alt="banner demon slayer" className={style.banner} />
      <Register />
    </section>
  );
}
