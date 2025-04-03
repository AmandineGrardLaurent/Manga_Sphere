import { toast } from "react-toastify";
import style from "./favoris.module.css";

export default function Favoris({ id }: { id: string }) {
  const handleClick = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/favoris`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ serie_id: id }),
        },
      );

      if (response.ok) {
        toast.success("Favoris ajoutée");
      } else {
        toast.error("Erreur lors de l'envoi...");
      }
    } catch (error) {
      toast.error("Erreur lors de l'envoi...");
    }
  };

  return (
    <button type="button" onClick={handleClick} className={style.button}>
      Ajouter aux favoris
    </button>
  );
}
