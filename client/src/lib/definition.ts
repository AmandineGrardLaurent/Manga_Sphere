// user

type RegisterFormType = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  confirmed_password: string;
};

// serie

type SerieType = {
  id: number;
  title: string;
  synopsis: string;
  author: string;
  picture: string;
};
