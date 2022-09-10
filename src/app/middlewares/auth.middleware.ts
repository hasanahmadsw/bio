/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jwt from "jsonwebtoken";

import { NextFunction, Response } from "express";

import { JWT_SECRET } from "../../config";
import { IAdmin } from "../../interfaces/schema/admin.schema";
import errorCodes from "../../utils/constants/errorCodes";
import Exception from "../../utils/exception";
import Admin from "../models/admin.model";

const authException = new Exception(errorCodes.UNAUTHORIZED);

export function createToken(
  admin: Pick<IAdmin, "_id" | "email">,
  secret: string
): string {
  return jwt.sign(
    {
      _id: admin._id,
      email: admin.email,
    },
    secret,
    {
      expiresIn: "60d",
    }
  );
}

export async function adminAuth(req: any, res: Response, next: NextFunction) {
  try {
    if (!req.header("Authorization")) return next(authException);
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return next(authException);
    const admin: any = await jwt.verify(token, JWT_SECRET);
    if (!admin) return next(authException);
    const result = await Admin.findById(admin._id);
    if (!result) return next(authException);
    req.user = admin;
    return next();
  } catch (error) {
    next(error);
  }
}

export async function isValidUserLoginToken(
  token: string,
  secret: string
): Promise<boolean> {
  try {
    await jwt.verify(token, secret);
    return true;
  } catch {
    return false;
  }
}
