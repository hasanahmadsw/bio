import { NextFunction, Request, Response } from "express";
import { LoginAdmin } from "../../interfaces/schema/admin.schema";
import * as AdminService from "../services/admin.service";

export async function loginAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: LoginAdmin = req.body;
    const token = await AdminService.LoginAdmin(data);
    return res.status(200).json({ response: { token } });
  } catch (err) {
    next(err);
  }
}
