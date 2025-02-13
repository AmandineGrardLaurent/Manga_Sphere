import style from "./serieCard.module.css";

export default function SerieCard({ serie }: { serie: SerieType }) {
  return (
    <section className={style.section}>
      <article className={style.article}>
        <div className={style.container}>
          <img
            src={serie.picture}
            alt={serie.title}
            className={style.picture}
          />
          <p className={style.synopsis}>{serie.synopsis}</p>
        </div>
      </article>
      <h2 className={style.titleH2}>{serie.title}</h2>
    </section>
  );
}
