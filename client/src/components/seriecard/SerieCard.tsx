import style from "./serieCard.module.css";

export default function SerieCard({ serie }: { serie: SerieType }) {
  return (
    <article>
      <div className={style.container}>
        <img src={serie.picture} alt={serie.title} className={style.picture} />
        <h2 className={style.titleH2}>{serie.title}</h2>
        <p className={style.synopsis}>{serie.synopsis}</p>
      </div>
    </article>
  );
}
