import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import style from "./usersAcceptedList.module.css";

export default function UsersAcceptedList({
  user,
  onDelete,
}: {
  user: UserType;
  onDelete: () => void;
}) {
  const { handleSubmit } = useForm();
  const userId = user.id;

  const onSubmit = async () => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`, {
        method: "delete",
        credentials: "include",
      });
      toast.success("Compte supprimé");
      onDelete();
    } catch (error) {
      toast.error("Erreur lors de la modification du profil");
    }
  };

  return (
    <section className={style.container}>
      <article key={user.id} className={style.userCard}>
        <p className={style.name}>
          {user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)}{" "}
          {user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1)}
        </p>
        <p className={style.text}>
          Inscrit le {new Date(user.created_at).toLocaleDateString("fr")}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="submit" className={style.button}>
            Supprimer
          </button>
        </form>
      </article>
    </section>
  );
}
