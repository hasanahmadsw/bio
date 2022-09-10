export interface IService {
  _id: string;
  slug: string;
  title: string;
  breif: string;
}

export type CreateService = Omit<IService, "_id">;
