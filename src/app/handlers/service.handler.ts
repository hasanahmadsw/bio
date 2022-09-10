import { NextFunction, Request, Response } from "express";
import { CreateService } from "../../interfaces/schema/service.schema";
import * as ServiceService from "../services/service.service";

export async function createService(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data: CreateService = req.body;
    const service = await ServiceService.createService(data);
    res.status(201).json({ response: service });
  } catch (err) {
    next(err);
  }
}

export async function findServiceBySlug(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const slug: string = req.params.slug;
    const service = await ServiceService.findServiceBySlug(slug);
    res.status(200).json({ response: service });
  } catch (err) {
    next(err);
  }
}

export async function findServices(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const services = await ServiceService.findServices();
    res.status(200).json({ response: services });
  } catch (err) {
    next(err);
  }
}

export async function updateService(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const data: Partial<CreateService> = req.body;
    const service = await ServiceService.updateService(id, data);
    res.status(200).json({ response: service });
  } catch (err) {
    next(err);
  }
}
export async function deleteService(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id: string = req.params.id;
    const service = await ServiceService.deleteService(id);
    res.status(204).json({ response: service });
  } catch (err) {
    next(err);
  }
}
