import { useEffect, useState } from "react";
import style from "./seasonDetails.module.css";

export default function SeasonsDetails({ id }: { id: string }) {
  const [seasons, setSeasons] = useState<SeasonType[]>([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie/season/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setSeasons(data);
      });
  }, [id]);

  return (
    seasons.length > 0 && (
      <section className={style.container}>
        <h2 className={style.titleH2}>Les saisons : </h2>
        <ul>
          {seasons.map((season) => (
            <li key={season.id} className={style.list}>
              Saison {season.number} : {season.title} - Sortie en {season.year}
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
