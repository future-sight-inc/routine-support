export type Coach = {
  _id: string;
  name: string;
  email: string;
};

export type LoginCoachDto = {
  email: string;
  password: string;
};

export type RegisterCoachDto = {
  name: string;
  email: string;
  password: string;
};

export type UpdateCoachDto = Partial<RegisterCoachDto>;
