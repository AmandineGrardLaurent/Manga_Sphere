import jwt from "jsonwebtoken";

export const encodeJWT = async (payload: PayloadType) => {
  const { email } = payload;

  return jwt.sign(payload, process.env.APP_SECRET as string, {
    expiresIn: "24h",
  });
};
