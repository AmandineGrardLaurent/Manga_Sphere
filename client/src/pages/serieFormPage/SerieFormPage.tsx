import banner from "../../assets/images/banner_demon_slayer.jpg";
import SerieForm from "../../components/serieForm/SerieForm";
import style from "./serieFormPage.module.css";

export default function SerieFormPage() {
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
        <article className={style.register}>
          <SerieForm />
        </article>
      </section>
    </>
  );
}
