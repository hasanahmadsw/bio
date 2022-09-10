import { Model, model, Schema } from "mongoose";
import { IAdmin } from "../../interfaces/schema/admin.schema";

const adminSchema = new Schema<IAdmin>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const Admin: Model<IAdmin> = model<IAdmin>("Admin", adminSchema);

export default Admin;
