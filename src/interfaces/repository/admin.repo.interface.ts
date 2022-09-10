import { CreateAdmin, IAdmin } from "../schema/admin.schema";

export interface IAdminRepo {
  insert(data: CreateAdmin): Promise<object>;
  findOneByEmail(email: string): Promise<IAdmin | undefined>;
}
