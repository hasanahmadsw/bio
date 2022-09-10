export interface IAdmin {
  _id: string;
  name: string;
  email: string;
  password: string;
}
export type CreateAdmin = Omit<IAdmin, "_id">;
export type LoginAdmin = Omit<IAdmin, "_id" | "name">;
