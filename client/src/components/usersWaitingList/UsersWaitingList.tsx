import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import style from "./usersWaitingList.module.css";

export default function UsersWaitingList({ user }: { user: UserType }) {
  const { handleSubmit } = useForm<UserType>();
  const userId = user.id;

  const onAccept = async (user: UserType) => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/api/waiting/${userId}`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(user),
      });

      toast.success("Inscription finalisée");
    } catch (error) {
      toast.error("Erreur lors de la modification du profil");
    }
  };

  const onRefused = async () => {
    try {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`, {
        method: "delete",
        credentials: "include",
      });
      toast.success("Inscription rejetée");
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
          Demande envoyée le{" "}
          {new Date(user.created_at).toLocaleDateString("fr")}
        </p>

        <form onSubmit={handleSubmit(onAccept)}>
          <button type="submit" className={style.buttonAccepted}>
            Accepter
          </button>
        </form>
        <form onSubmit={handleSubmit(onRefused)}>
          <button type="submit" className={style.buttonRefused}>
            Rejeter
          </button>
        </form>
      </article>
    </section>
  );
}
