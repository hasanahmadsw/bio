import { IAdminRepo } from "../../interfaces/repository/admin.repo.interface";
import { CreateAdmin, IAdmin } from "../../interfaces/schema/admin.schema";
import Admin from "../models/admin.model";

class AdminRepository implements IAdminRepo {
  async insert(data: CreateAdmin): Promise<object> {
    await Admin.create(data);
    return await Admin.findOne();
  }
  async findOneByEmail(email: string): Promise<IAdmin> {
    return await Admin.findOne({ email: email });
  }
}

export default new AdminRepository();
