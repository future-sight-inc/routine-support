import { User } from "@routine-support/domains";
import { Request } from "express";

export type AuthorizedRequest = Request & { user: User };
