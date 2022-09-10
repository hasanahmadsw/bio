import { IServiceRepo } from "../../interfaces/repository/service.repo.interface";
import {
  CreateService,
  IService,
} from "../../interfaces/schema/service.schema";
import Service from "../models/service.model";

class ServiceRepository implements IServiceRepo {
  async insertOne(data: CreateService): Promise<IService> {
    const insert = await Service.create(data);
    return await Service.findById(insert._id);
  }
  async findOneBySlug(slug: string): Promise<IService> {
    return await Service.findOne({ slug: slug });
  }
  async findOneById(id: string): Promise<IService> {
    return await Service.findById(id);
  }
  async findAll(): Promise<IService[]> {
    return await Service.find({});
  }
  async updateOne(id: string, data: Partial<IService>): Promise<IService> {
    await Service.findOneAndUpdate({ _id: id }, { $set: data });
    return await Service.findById(id);
  }
  async deleteOne(id: string): Promise<boolean> {
    const result = await Service.deleteOne({ _id: id });
    return result.deletedCount > 0;
  }
}

export default new ServiceRepository();
