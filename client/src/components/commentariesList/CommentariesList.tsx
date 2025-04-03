import { useEffect, useState } from "react";
import style from "./commentariesList.module.css";

type CommentaryType = {
  id: string;
  comment: string;
  rating: string;
  firstname: string;
  lastname: string;
};

export default function CommentariesList({
  id,
  refresh,
}: {
  id: string;
  refresh: boolean;
}) {
  const [comments, setComments] = useState<CommentaryType[]>([]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/serie/commentary/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, [id, refresh]);

  return (
    comments.length > 0 && (
      <section className={style.container}>
        <h2 className={style.titleH2}>Commentaires :</h2>
        {comments.map((comment) => (
          <article key={comment.comment} className={style.commentName}>
            <p className={style.name}>
              {comment.firstname.charAt(0).toUpperCase() +
                comment.firstname.slice(1)}{" "}
              {comment.lastname.charAt(0).toUpperCase() +
                comment.lastname.slice(1)}
            </p>
            <p className={style.comment}>{comment.comment}</p>
          </article>
        ))}
      </section>
    )
  );
}
