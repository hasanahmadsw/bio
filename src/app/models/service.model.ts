import { Model, model, Schema } from "mongoose";
import { IService } from "../../interfaces/schema/service.schema";

const serviceSchema = new Schema<IService>({
  slug: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  breif: {
    type: String,
    required: true,
  },
});

const Service: Model<IService> = model<IService>("Service", serviceSchema);

export default Service;
