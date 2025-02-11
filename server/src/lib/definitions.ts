// user

type UserType = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

type NewUserType = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
};

// serie

type NewSerieType = {
  id: number;
  title: string;
  author: string;
  synopsis: string;
  picture: string;
};

type SerieType = {
  id: number;
  title: string;
  author: string;
  synopsis: string;
  picture: string;
};
