import { NextFunction, Request, Response } from "express";
import { SkillQuery } from "../../interfaces/repository/skill.repo.interface";
import { CreateSkill } from "../../interfaces/schema/skill.schema";
import * as SkillService from "../services/skill.service";

export async function createSkill(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CreateSkill = req.body;
    const skill = await SkillService.createSkill(data);
    res.status(201).json({ response: skill });
  } catch (err) {
    next(err);
  }
}

export async function findSkills(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const query: SkillQuery = req.query;
    const skills = await SkillService.findSkills(query.type);
    res.status(200).json({ response: skills });
  } catch (err) {
    next(err);
  }
}

export async function updateSkill(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const data: Partial<CreateSkill> = req.body;
    const skill = await SkillService.updateSkill(id, data);
    res.status(202).json({ response: skill });
  } catch (err) {
    next(err);
  }
}
export async function deleteSkill(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const skill = await SkillService.deleteSkill(id);
    res.status(204).json({ response: skill });
  } catch (err) {
    next(err);
  }
}
