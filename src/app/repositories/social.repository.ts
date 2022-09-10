import { ISocialRepo } from "../../interfaces/repository/social.repo.interface";
import { ISocial } from "../../interfaces/schema/social.schema";
import Social from "../models/social.model";

class SocialRepository implements ISocialRepo {
  async insert(data: ISocial): Promise<ISocial> {
    await Social.create(data);
    return Social.findOne();
  }
  async find(): Promise<ISocial> {
    return await Social.findOne();
  }
  async update(data: Partial<ISocial>): Promise<ISocial> {
    await Social.findOneAndUpdate({}, { $set: data });
    return await Social.findOne();
  }
}

export default new SocialRepository();
