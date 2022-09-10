import { CreateSkill, ISkill } from "../schema/skill.schema";

export type SkillQuery = {
  type?: string;
};

export interface ISkillRepo {
  insertOne(data: CreateSkill): Promise<ISkill | undefined>;
  findAll(type?: string): Promise<ISkill[]>;
  findOneById(id: string): Promise<ISkill[]>;
  updateOne(id: string, data: Partial<ISkill>): Promise<ISkill>;
  deleteOne(id: string): Promise<boolean>;
}
