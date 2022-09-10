import { ISocial } from "../schema/social.schema";

export interface ISocialRepo {
  insert(data: ISocial): Promise<ISocial | undefined>;
  find(): Promise<ISocial | undefined>;
  update(data: Partial<ISocial>): Promise<ISocial>;
}
