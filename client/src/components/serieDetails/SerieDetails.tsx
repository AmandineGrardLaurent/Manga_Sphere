import { useEffect, useState } from "react";

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
      <section>
        <h2>Titre : {serieDetails.title}</h2>
        <img
          src={serieDetails.picture}
          alt={serieDetails.title}
          width="400px"
        />
        <h2>Auteur : {serieDetails.author}</h2>
        <p>synopsis : {serieDetails.synopsis}</p>
      </section>
    )
  );
}
