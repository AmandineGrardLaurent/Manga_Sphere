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
    <section className={style.decisionContainer}>
      <h2 className={style.titleH2}>Création d'un nouveau manga</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <section>
          <label htmlFor="title" className={style.label}>
            Titre du manga :
            <input
              className={style.input}
              type="text"
              id="title"
              placeholder="Titre"
              {...register("title", { required: true })}
            />
          </label>
        </section>

        <section>
          <label htmlFor="author" className={style.label}>
            Auteur :
            <input
              className={style.textarea}
              id="author"
              placeholder="Saisissez l'impact ici"
              {...register("author", { required: true })}
            />
          </label>
        </section>
        <section>
          <label htmlFor="synopsis" className={style.label}>
            Synopsis :
            <textarea
              className={style.textarea}
              id="synopsis"
              placeholder="Synopsis "
              {...register("synopsis", { required: true })}
            />
          </label>
        </section>
        <section>
          <label htmlFor="picture" className={style.label}>
            Adresse URL de la photo :
            <input
              className={style.textarea}
              id="picture"
              placeholder="Saisissez les bénéfices ici"
              {...register("picture", { required: true })}
            />
          </label>
        </section>

        <section className={style.buttongroup}>
          <NavLink to={"/admin"}>
            <button type="button" className={style.canceldButton}>
              Annuler
            </button>
          </NavLink>
          <button type="submit" className={style.add}>
            Ajouter un manga
          </button>
        </section>
      </form>
    </section>
  );
}

export default SerieForm;
