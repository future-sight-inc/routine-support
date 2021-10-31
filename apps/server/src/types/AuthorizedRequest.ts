import { User } from "@routine-support/models";
import { Request } from "express";

export type AuthorizedRequest = Request & { user: User };
