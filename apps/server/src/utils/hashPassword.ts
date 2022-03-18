import crypto from "crypto";

export const hashPassword = (password: string): string => {
  return crypto
    .createHmac("sha256", process.env.NX_SECRET_KEY || "")
    .update(password)
    .digest("hex");
};
