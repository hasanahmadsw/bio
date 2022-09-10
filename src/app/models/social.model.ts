import { Model, model, Schema } from "mongoose";
import { ISocial } from "../../interfaces/schema/social.schema";

const socialMediaSchema = new Schema<ISocial>({
  facebook: { type: String },
  instagram: { type: String },
  linkedin: { type: String },
  whatsapp: { type: String },
  github: { type: String },
  twitter: { type: String },
  telegtam: { type: String },
});
const Social: Model<ISocial> = model<ISocial>("Social", socialMediaSchema);
export default Social;
