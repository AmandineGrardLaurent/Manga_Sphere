import { useForm } from "react-hook-form";
import type { FieldValues } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./loginForm.module.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();

  const Navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    try {
      const { email, password } = data;
      const loginData = {
        email: email.toLowerCase(),
        password,
      };

      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });
      const result = await response.json();
      if (response.ok) {
        reset();
        toast.success(result.message || "Connexion réussie !");
      } else {
        toast.error(result.message || "Erreur lors de la connexion");
      }

      setTimeout(() => {
        Navigate("/series");
      }, 1500);
    } catch (error) {
      toast.error("Erreur de connexion. Vérifiez vos identifiants.");
    }
  };

  return (
    <section className={style.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className={style.section}>
          <h1 className={style.titleH2}>Connexion</h1>

          <label htmlFor="email" className={style.label}>
            Email
            <input
              id="email"
              type="email"
              aria-label="Saisissez votre email"
              placeholder="tanjiro@demonslayer.com"
              className={style.input}
              autoComplete="email"
              {...register("email", {
                required: "champ obligatoire",
              })}
            />
            <span className={style.errorText}>
              {errors.email?.message?.toString()}
            </span>
          </label>

          <label htmlFor="password" className={style.label}>
            Mot de passe
            <input
              id="password"
              type="password"
              aria-label="Saisissez votre mot de passe"
              placeholder="Saisissez votre mot de passe"
              className={style.input}
              autoComplete="current-password"
              {...register("password", {
                required: "champ obligatoire",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                  message:
                    "Le mot de passe doit contenir au minimum 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial",
                },
              })}
            />
            <span className={style.errorText}>
              {errors.password?.message?.toString()}
            </span>
          </label>

          <button type="submit" className={style.buttonLogin}>
            Se connecter
          </button>

          <NavLink to="/register" className={style.link}>
            Pas encore <b>inscrit ?</b>
          </NavLink>
        </section>
      </form>
    </section>
  );
}
