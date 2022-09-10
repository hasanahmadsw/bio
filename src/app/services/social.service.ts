import { ISocial } from "../../interfaces/schema/social.schema";
import errorCodes from "../../utils/constants/errorCodes";
import Exception from "../../utils/exception";
import SocialRepository from "../repositories/social.repository";

export async function createSocial(data: ISocial) {
  const isExist = await SocialRepository.find();
  if (isExist) throw new Exception(errorCodes.SOCIAL_ALREADY_EXISTS);
  return await SocialRepository.insert(data);
}

export async function findSocial() {
  const social = await SocialRepository.find();
  if (!social) throw new Exception(errorCodes.NOT_FOUND);
  return social;
}

export async function updateSocial(data: Partial<ISocial>) {
  const isExist = await SocialRepository.find();
  if (!isExist) throw new Exception(errorCodes.NOT_FOUND);
  return await SocialRepository.update(data);
}
