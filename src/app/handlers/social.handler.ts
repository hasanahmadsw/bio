import { NextFunction, Request, Response } from "express";
import { ISocial } from "../../interfaces/schema/social.schema";
import * as SocialService from "../services/social.service";

export async function createSocial(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: ISocial = req.body;
    const social = await SocialService.createSocial(data);
    res.status(201).json({
      response: social,
    });
  } catch (err) {
    next(err);
  }
}

export async function findSocial(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const social = await SocialService.findSocial();
    return res.status(201).json({
      response: social,
    });
  } catch (err) {
    next(err);
  }
}

export async function updateSocial(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: Partial<ISocial> = req.body;
    const social = await SocialService.updateSocial(data);
    return res.status(201).json({
      response: social,
    });
  } catch (err) {
    next(err);
  }
}
