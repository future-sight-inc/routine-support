import { UniqueId, Email } from '../types/main';

export type UserName = string;
export type User = {
  id: UniqueId;
  name: UserName;
  email: Email;
};
