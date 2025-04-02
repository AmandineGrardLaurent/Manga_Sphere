import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import style from "./commentaryPost.module.css";

export default function CommentaryPost({
  id,
  onComment,
}: {
  id: string;
  onComment: () => void;
}) {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (dataForm: FieldValues) => {
    try {
      const data = { comment: dataForm.comment, id };
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/serie/commentary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify(data),
        },
      );
      await response.json();
      reset();
      toast.success("Commentaire envoyé");
      onComment();
    } catch (error) {
      toast.error("Erreur lors de l'envoi...");
      console.error(error);
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={style.label}>
          Postez votre commentaire
          <input
            type="textarea"
            id="comment"
            {...register("comment", { required: "champ obligatoire" })}
            className={style.input}
          />
        </label>
        <button type="submit" className={style.button}>
          Publier
        </button>
      </form>
    </section>
  );
}
