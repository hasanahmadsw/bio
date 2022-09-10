import { CreateResume, IExperience, IResume } from "../schema/resume.schema";

export interface IResumeRepo {
  insert(data: CreateResume): Promise<IResume>;
  find(): Promise<IResume | undefined>;
  update(data: CreateResume): Promise<IResume>;
  addExperience(data: IExperience): Promise<IResume>;
  deleteExperience(id: string): Promise<IResume>;
}
