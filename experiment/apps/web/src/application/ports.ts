import { User, UserName } from '../domain/user';
import { Week } from '../domain/week';
import { Email, WeekNumber, YearNumber } from '../types/main';

export interface UserStorageService {
  user?: User;
  setUser(user: User | null): void;
}

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface WeekStorageService {
  week: Week;
  setWeek(year: YearNumber, week: WeekNumber): Promise<Week>;
}
