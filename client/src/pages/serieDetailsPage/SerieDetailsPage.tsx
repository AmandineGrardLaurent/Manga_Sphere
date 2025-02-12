import { useParams } from "react-router-dom";
import SeasonsDetails from "../../components/seasonsDetails/SeasonsDetails";
import SerieDetails from "../../components/serieDetails/SerieDetails";
import VolumesDetails from "../../components/volumesDetails/VolumesDetails";

export default function SerieDetailsPage() {
  const { id } = useParams();

  if (!id) {
    return <div>Erreur, saississez un id valide</div>;
  }
  return (
    <>
      <SerieDetails id={id} />
      <SeasonsDetails id={id} />
      <VolumesDetails id={id} />
    </>
  );
}
