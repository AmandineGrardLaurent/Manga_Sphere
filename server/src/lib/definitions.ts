// user

type UserType = {
  id: number;
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role_id: string;
};

type NewUserType = {
  lastname: string;
  firstname: string;
  email: string;
  password: string;
  role_id: string;
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

// season

type NewSeasonType = {
  title: string;
  number: number;
  year: number;
  serie_id: number;
};

type SeasonType = {
  id: number;
  title: string;
  number: number;
  year: number;
  serie_id: number;
};

// volume

type NewVolumeType = {
  title: string;
  number: number;
  serie_id: number;
};

type VolumeType = {
  id: number;
  title: string;
  number: number;
  serie_id: number;
};

// commentary

type CommentaryType = {
  comment: string;
  // rating: string;
  // user_id: number;
  serie_id: number;
};

// payload

type PayloadType = {
  email: string;
};
