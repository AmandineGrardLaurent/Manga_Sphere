import { useEffect, useState } from "react";
import SerieCard from "../../components/seriecard/SerieCard";
import style from "./homepage.module.css";
import banner from "../../assets/images/banner_bleach.jpg";

export default function HomePage() {
  const [series, setSeries] = useState<SerieType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie`)
      .then((response) => response.json())
      .then((data) => {
        setSeries(data);
      });
  }, []);

  return (
    series.length > 0 && (
      <>
        <header>
          <img
            src={banner}
            alt="banner bleach manga"
            className={style.banner}
          />
        </header>
        <main>
          <h2 className={style.titleH2}>Découvre ton manga</h2>
          <section>
            <article className={style.card}>
              {series.map((serie) => (
                <SerieCard serie={serie} key={serie.id} />
              ))}
            </article>
          </section>
        </main>
      </>
    )
  );
}
