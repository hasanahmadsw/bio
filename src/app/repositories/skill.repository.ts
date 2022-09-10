import { ISkillRepo } from "../../interfaces/repository/skill.repo.interface";
import { CreateSkill, ISkill } from "../../interfaces/schema/skill.schema";
import Skill from "../models/skill.model";

class SkillRepository implements ISkillRepo {
  async insertOne(data: CreateSkill): Promise<ISkill> {
    const insert = await Skill.create(data);
    return await Skill.findById(insert._id);
  }
  async findAll(type?: string): Promise<ISkill[]> {
    if (type) {
      return await Skill.find({ type: type });
    }
    return await Skill.find({});
  }
  async findOneById(id: string): Promise<ISkill[]> {
    return await Skill.findById(id);
  }
  async updateOne(id: string, data: Partial<ISkill>): Promise<ISkill> {
    await Skill.findOneAndUpdate({ _id: id }, { $set: data });
    return await Skill.findById(id);
  }
  async deleteOne(id: string): Promise<boolean> {
    const result = await Skill.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}

export default new SkillRepository();
