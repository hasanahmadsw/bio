import { NextFunction, Request, Response } from "express";
import * as AdminService from "./app/services/admin.service";
import { ADMIN_EMAIL, ADMIN_NAME, ADMIN_PASSWORD } from "./config";

const admin = {
  name: ADMIN_NAME,
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
};

export async function seed(req: Request, res: Response, next: NextFunction) {
  try {
    await AdminService.createAdmin(admin);
    res.status(201).json({
      message: "Created!",
    });
  } catch (err) {
    next(err);
  }
}
