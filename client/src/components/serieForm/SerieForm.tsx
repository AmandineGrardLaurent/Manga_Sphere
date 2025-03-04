import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./serieForm.module.css";

function SerieForm() {
  const { register, handleSubmit, reset } = useForm<SerieFormType>();

  const onSubmit = async (data: SerieFormType) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/serie`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        reset();
        toast.success("Décision envoyée à l'administrateur");
      } else {
        toast.error("Erreur lors de l'envoi de la décision");
      }
    } catch (error) {
      toast.error("Erreur de connexion au serveur...");
    }
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <section className={style.section}>
          <h2 className={style.titleH2}>Création d'un nouveau manga</h2>
          <label htmlFor="title" className={style.label}>
            Titre du manga :
            <input
              className={style.input}
              type="text"
              id="title"
              placeholder="Jujutsu Kaisen"
              {...register("title", { required: true })}
            />
          </label>
          <label htmlFor="author" className={style.label}>
            Auteur :
            <input
              className={style.input}
              id="author"
              placeholder="Gege Akutami"
              {...register("author", { required: true })}
            />
          </label>
          <label htmlFor="synopsis" className={style.label}>
            Synopsis :
            <textarea
              className={style.textarea}
              id="synopsis"
              placeholder="Synopsis "
              {...register("synopsis", { required: true })}
            />
          </label>
          <label htmlFor="picture" className={style.label}>
            Adresse URL de la photo :
            <input
              className={style.input}
              id="picture"
              placeholder="https://fr.web.img3.acsta.net/pictures/20/09/14/10/31/4875617.jpg"
              {...register("picture", { required: true })}
            />
          </label>
          <section className={style.buttonGroup}>
            <button type="button" className={style.buttonCancel}>
              <NavLink to={"/admin"} className={style.link}>
                Annuler
              </NavLink>
            </button>
            <button type="submit" className={style.buttonSubmit}>
              Ajouter un manga
            </button>
          </section>
        </section>
      </form>
    </section>
  );
}

export default SerieForm;
