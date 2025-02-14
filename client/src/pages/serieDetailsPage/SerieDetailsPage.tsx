import { useParams } from "react-router-dom";
import banner from "../../assets/images/banner_bleach.jpg";
import CommentariesList from "../../components/commentariesList/CommentariesList";
import CommentaryPost from "../../components/commentaryPost/CommentaryPost";
import Favoris from "../../components/favoris/Favoris";
import Navbar from "../../components/navbar/Navbar";
import SeasonsDetails from "../../components/seasonsDetails/SeasonsDetails";
import SerieDetails from "../../components/serieDetails/SerieDetails";
import VolumesDetails from "../../components/volumesDetails/VolumesDetails";
import style from "./serieDetailsPage.module.css";

export default function SerieDetailsPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Erreur, saississez un id valide</div>;
  }
  return (
    <>
      <Navbar />
      <header>
        <img src={banner} alt="banner bleach manga" className={style.banner} />
      </header>
      <section className={style.page}>
        <SerieDetails id={id} />
        <Favoris id={id} />
        <section className={style.books}>
          <SeasonsDetails id={id} />
          <VolumesDetails id={id} />
        </section>
        <section className={style.commentary}>
          <CommentariesList id={id} />
          <CommentaryPost id={id} />
        </section>
      </section>
    </>
  );
}
