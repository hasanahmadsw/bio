import { CreateService } from "../../interfaces/schema/service.schema";
import errorCodes from "../../utils/constants/errorCodes";
import Exception from "../../utils/exception";
import ServiceRepository from "../repositories/service.repository";

export async function createService(data: CreateService) {
  const isExist = await ServiceRepository.findOneBySlug(data.slug);
  if (isExist) throw new Exception(errorCodes.SLUG_NOT_AVAILABLE);
  return await ServiceRepository.insertOne(data);
}

export async function findServiceBySlug(slug: string) {
  const service = await ServiceRepository.findOneBySlug(slug);
  if (!service) throw new Exception(errorCodes.NOT_FOUND);
  return service;
}

export async function findServices() {
  return await ServiceRepository.findAll();
}

export async function updateService(id: string, data: Partial<CreateService>) {
  const isExist = await ServiceRepository.findOneById(id);
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  return await ServiceRepository.updateOne(id, data);
}

export async function deleteService(id: string) {
  const isExist = await ServiceRepository.findOneById(id);
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  return await ServiceRepository.deleteOne(id);
}
