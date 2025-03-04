import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import banner from "../../assets/images/banner_bleach.jpg";
import Navbar from "../../components/navbar/Navbar";
import UsersAcceptedList from "../../components/usersAcceptedList/UsersAcceptedList";
import UsersWaitingList from "../../components/usersWaitingList/UsersWaitingList";
import style from "./adminProfile.module.css";

export default function AdminProfilePage() {
  const [acceptedUsers, setAcceptedUsers] = useState<UserType[]>([]);
  const [waitingUsers, setWaitingUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/accepted`)
      .then((response) => response.json())
      .then((data) => {
        setAcceptedUsers(data);
      });
    fetch(`${import.meta.env.VITE_API_URL}/api/waiting`)
      .then((response) => response.json())
      .then((data) => {
        setWaitingUsers(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <header>
        <img src={banner} alt="banner bleach manga" className={style.banner} />
      </header>
      <main className={style.main}>
        <h2 className={style.titleH2}>
          Bienvenue sur l'espace administrateur de la Manga Sphere
        </h2>
        <NavLink to="/serieForm">
          <button type="button" className={style.button}>
            Ajout d'un nouveau manga
          </button>
        </NavLink>
        <section>
          <h3 className={style.titleH3}>Gestion des demandes d'inscription</h3>
          <article className={style.usersList}>
            {waitingUsers.map((user) => (
              <UsersWaitingList user={user} key={user.id} />
            ))}
          </article>
        </section>
        <section>
          <h3 className={style.titleH3}>Gestion des utilisateurs inscrits</h3>
          <article className={style.usersList}>
            {acceptedUsers.map((user) => (
              <UsersAcceptedList user={user} key={user.id} />
            ))}
          </article>
        </section>
      </main>
    </>
  );
}
