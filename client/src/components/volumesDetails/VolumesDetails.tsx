import { useEffect, useState } from "react";
import style from "./volumeDetails.module.css";

export default function VolumesDetails({ id }: { id: string }) {
  const [volumes, setVolumes] = useState<VolumeType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie/volume/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setVolumes(data);
      });
  }, [id]);
  return (
    volumes.length > 0 && (
      <section className={style.container}>
        <h2 className={style.titleH2}>Les tomes : </h2>
        <ul>
          {volumes.map((volume) => (
            <li key={volume.id} className={style.list}>
              Tome {volume.number} : {volume.title}
            </li>
          ))}
        </ul>
      </section>
    )
  );
}
