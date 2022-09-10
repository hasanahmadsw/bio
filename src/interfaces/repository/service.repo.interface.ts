import { CreateService, IService } from "../schema/service.schema";

export interface IServiceRepo {
  insertOne(data: CreateService): Promise<IService | undefined>;
  insertMany(data: CreateService[]): Promise<IService[] | undefined>;
  findOneBySlug(slug: string): Promise<IService | undefined>;
  findOneById(id: string): Promise<IService | undefined>;
  findAll(): Promise<IService[]>;
  updateOne(id: string, data: Partial<IService>): Promise<IService>;
  deleteOne(id: string): Promise<boolean>;
}
