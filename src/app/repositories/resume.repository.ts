import { IResumeRepo } from "../../interfaces/repository/resume.repo.interface";
import {
  CreateResume,
  ICertificate,
  IEducation,
  IExperience,
  IResume,
} from "../../interfaces/schema/resume.schema";
import Resume from "../models/resume.model";

class ResumeRepository implements IResumeRepo {
  async insert(data: IResume): Promise<IResume> {
    await Resume.create(data);
    return await Resume.findOne();
  }
  async find(): Promise<IResume> {
    return await Resume.findOne();
  }
  async update(data: CreateResume): Promise<IResume> {
    await Resume.findOneAndUpdate({}, { $set: data });
    return await Resume.findOne();
  }
  async addExperience(data: IExperience): Promise<IResume> {
    const resume = await Resume.findOne();
    resume.experiences.push(data);
    await resume.save();
    return await Resume.findOne();
  }
  async deleteExperience(id: string): Promise<IResume> {
    await Resume.findOneAndUpdate({}, { $pull: { experiences: { _id: id } } });
    return await Resume.findOne();
  }
  async addEducation(data: IEducation): Promise<IResume> {
    const resume = await Resume.findOne();
    resume.educations.push(data);
    await resume.save();
    return await Resume.findOne();
  }
  async deleteEducation(id: string): Promise<IResume> {
    await Resume.findOneAndUpdate({}, { $pull: { educations: { _id: id } } });
    return await Resume.findOne();
  }
  async addCertificate(data: ICertificate): Promise<IResume> {
    const resume = await Resume.findOne();
    resume.certificates.push(data);
    await resume.save();
    return await Resume.findOne();
  }
  async deleteCertificate(id: string): Promise<IResume> {
    await Resume.findOneAndUpdate({}, { $pull: { certificates: { _id: id } } });
    return await Resume.findOne();
  }
}

export default new ResumeRepository();
