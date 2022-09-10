import { CreateSkill } from "../../interfaces/schema/skill.schema";
import errorCodes from "../../utils/constants/errorCodes";
import Exception from "../../utils/exception";
import SkillRepository from "../repositories/skill.repository";

export async function createSkill(data: CreateSkill) {
  return await SkillRepository.insertOne(data);
}
export async function findSkills(type?: string) {
  return await SkillRepository.findAll(type);
}
export async function updateSkill(id: string, data: Partial<CreateSkill>) {
  const isExist = await SkillRepository.findOneById(id);
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  return await SkillRepository.updateOne(id, data);
}
export async function deleteSkill(id: string) {
  const isExist = await SkillRepository.findOneById(id);
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  return await SkillRepository.deleteOne(id);
}
