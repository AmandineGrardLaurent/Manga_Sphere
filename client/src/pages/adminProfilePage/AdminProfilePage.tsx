import { useEffect, useState } from "react";
import UsersAcceptedList from "../../components/usersAcceptedList/UsersAcceptedList";
import UsersWaitingList from "../../components/usersWaitingList/UsersWaitingList";

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
      <h1>Bienvenue sur l'espace administrateur de la Manga Sphere</h1>{" "}
      <section>
        <h2>Gestion des demandes d'inscription</h2>
        {waitingUsers.map((user) => (
          <UsersWaitingList user={user} key={user.id} />
        ))}
      </section>
      <section>
        <h2>Gestion des utilisateurs inscrits</h2>
        {acceptedUsers.map((user) => (
          <UsersAcceptedList user={user} key={user.id} />
        ))}
      </section>
    </>
  );
}
