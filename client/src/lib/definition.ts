// user

type RegisterFormType = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  confirmed_password: string;
};

type UserType = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role_id: number;
  created_at: Date;
  updated_at: Date;
};

// serie

type SerieType = {
  id: number;
  title: string;
  synopsis: string;
  author: string;
  picture: string;
};

type SerieDetailsType = {
  title: string;
  synopsis: string;
  author: string;
  picture: string;
};

// season

type SeasonType = {
  id: number;
  title: string;
  number: number;
  year: number;
  serie_id: number;
};

// volume

type VolumeType = {
  id: number;
  title: string;
  number: number;
  serie_id: number;
};
