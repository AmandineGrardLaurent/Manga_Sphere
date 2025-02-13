import { useEffect, useState } from "react";
import style from "./serieDetails.module.css";

export default function SerieDetails({ id }: { id: string }) {
  const [serieDetails, setSerieDetails] = useState(
    null as null | SerieDetailsType,
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie/${id}`)
      .then((response) => response.json())
      .then((data: SerieDetailsType) => {
        setSerieDetails(data);
      });
  }, [id]);

  return (
    serieDetails && (
      <section className={style.container}>
        <img
          src={serieDetails.picture}
          alt={serieDetails.title}
          className={style.image}
        />
        <div className={style.description}>
          <h2 className={style.titleH2}>{serieDetails.title}</h2>
          <h3>Auteur : {serieDetails.author}</h3>
          <p>synopsis : {serieDetails.synopsis}</p>
        </div>
      </section>
    )
  );
}
