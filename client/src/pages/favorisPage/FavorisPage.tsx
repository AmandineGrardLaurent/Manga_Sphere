import { useEffect, useState } from "react";
import banner from "../../assets/images/banner_bleach.jpg";
import Navbar from "../../components/navbar/Navbar";
import SerieCard from "../../components/seriecard/SerieCard";
import style from "./favorisPage.module.css";

export default function FavorisPage() {
  const [favoris, setFavoris] = useState<SerieType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/favoris`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoris(data);
      });
  }, []);

  return (
    favoris.length > 0 && (
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
          <h2 className={style.titleH2}>Mes favoris :</h2>
          <section>
            <ul className={style.card}>
              {favoris.map((favoris) => (
                <li key={favoris.id}>
                  <SerieCard serie={favoris} />
                </li>
              ))}
            </ul>
          </section>
        </main>
      </>
    )
  );
}
