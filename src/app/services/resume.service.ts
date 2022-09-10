import {
  CreateResume,
  ICertificate,
  IEducation,
  IExperience,
  IResume,
} from "../../interfaces/schema/resume.schema";
import errorCodes from "../../utils/constants/errorCodes";
import Exception from "../../utils/exception";
import ResumeRepository from "../repositories/resume.repository";

export async function createResume(data: IResume) {
  const isExist = await ResumeRepository.find();
  if (isExist) throw new Exception(errorCodes.RESUME_ALREADY_EXISTS);
  return await ResumeRepository.insert(data);
}

export async function findResume() {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return resume;
}

export async function updateResume(data: CreateResume) {
  const isExist = await ResumeRepository.find();
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  const resume = await ResumeRepository.update(data);
  return resume;
}

export async function addExperience(data: IExperience) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.addExperience(data);
}

export async function deleteExperience(id: string) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.deleteExperience(id);
}

export async function addEducation(data: IEducation) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.addEducation(data);
}

export async function deleteEducation(id: string) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.deleteEducation(id);
}

export async function addCertificate(data: ICertificate) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.addCertificate(data);
}

export async function deleteCertificate(id: string) {
  const resume = await ResumeRepository.find();
  if (!resume) throw new Exception(errorCodes.NOT_FOUND);
  return await ResumeRepository.deleteCertificate(id);
}
