import { useEffect, useState } from "react";
import style from "./commentariesList.module.css";

type CommentaryType = {
  id: string;
  comment: string;
  rating: string;
  firstname: string;
  lastname: string;
};

export default function CommentariesList({ id }: { id: string }) {
  const [comments, setComments] = useState<CommentaryType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie/commentary/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, [id]);

  return (
    comments.length > 0 && (
      <section className={style.container}>
        <h2>Commentaires :</h2>
        {comments.map((comment) => (
          <article key={comment.comment} className={style.comment}>
            <p>
              {comment.firstname} {comment.lastname}
            </p>
            <p>{comment.comment}</p>
          </article>
        ))}
      </section>
    )
  );
}
