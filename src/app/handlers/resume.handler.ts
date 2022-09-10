import { NextFunction, Request, Response } from "express";
import {
  CreateResume,
  ICertificate,
  IEducation,
  IExperience,
} from "../../interfaces/schema/resume.schema";
import * as ResumeService from "../services/resume.service";

export async function createResume(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CreateResume = req.body;
    const resume = await ResumeService.createResume(data);
    res.status(201).json({ response: resume });
  } catch (err) {
    next(err);
  }
}

export async function findResume(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const resume = await ResumeService.findResume();
    return res.status(200).json({ response: resume });
  } catch (err) {
    next(err);
  }
}

export async function updateResume(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CreateResume = req.body;
    const resume = await ResumeService.updateResume(data);
    return res.status(200).json({ response: resume });
  } catch (err) {
    next(err);
  }
}

export async function addExperience(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: IExperience = req.body;
    const experience = await ResumeService.addExperience(data);
    return res.status(200).json({ response: experience });
  } catch (err) {
    next(err);
  }
}

export async function deleteExperience(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const experience = await ResumeService.deleteExperience(id);
    return res.status(204).json({ response: experience });
  } catch (err) {
    next(err);
  }
}

export async function addEducation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: IEducation = req.body;
    const education = await ResumeService.addEducation(data);
    return res.status(200).json({ response: education });
  } catch (err) {
    next(err);
  }
}

export async function deleteEducation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const education = await ResumeService.deleteEducation(id);
    return res.status(204).json({ response: education });
  } catch (err) {
    next(err);
  }
}

export async function addCertificate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: ICertificate = req.body;
    const certificate = await ResumeService.addCertificate(data);
    return res.status(200).json({ response: certificate });
  } catch (err) {
    next(err);
  }
}

export async function deleteCertificate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = req.params.id;
    const certificate = await ResumeService.deleteCertificate(id);
    return res.status(204).json({ response: certificate });
  } catch (err) {
    next(err);
  }
}
