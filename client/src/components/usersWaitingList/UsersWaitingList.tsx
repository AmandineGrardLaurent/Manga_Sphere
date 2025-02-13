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
    } catch (error) {
      toast.error("Erreur lors de la modification du profil");
    }
  };

  return (
    <section className={style.container}>
      <article key={user.id} className={style.userCard}>
        <div>
          {user.firstname} {user.lastname}
        </div>
        <div>
          Demande envoyée le{" "}
          {new Date(user.created_at).toLocaleDateString("fr")}
        </div>

        <form onSubmit={handleSubmit(onAccept)}>
          <button type="submit">Accepter</button>
        </form>
        <form onSubmit={handleSubmit(onRefused)}>
          <button type="submit">Rejeter</button>
        </form>
      </article>
    </section>
  );
}
