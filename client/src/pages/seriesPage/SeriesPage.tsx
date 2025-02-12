import { useEffect, useState } from "react";
import banner from "../../assets/images/banner_bleach.jpg";
import Navbar from "../../components/navbar/Navbar";
import SerieCard from "../../components/seriecard/SerieCard";
import style from "./seriesPage.module.css";

export default function SeriesPage() {
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
        <Navbar />
        <header>
          <img
            src={banner}
            alt="banner bleach manga"
            className={style.banner}
          />
        </header>
        <main className={style.main}>
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
