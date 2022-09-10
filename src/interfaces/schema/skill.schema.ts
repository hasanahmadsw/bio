export interface ISkill {
  _id: string;
  title: string;
  icon: string;
  type: string;
}

export type CreateSkill = Omit<ISkill, "_id">;
