import crypto from "crypto";

export const hashPassword = (password: string): string => {
  return crypto
    .createHmac("sha256", process.env.SECRET_KEY || "")
    .update(password)
    .digest("hex");
};
