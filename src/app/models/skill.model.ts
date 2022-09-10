import { Model, model, Schema } from "mongoose";
import { ISkill } from "../../interfaces/schema/skill.schema";

const skillSchema = new Schema<ISkill>({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Skill: Model<ISkill> = model<ISkill>("Skill", skillSchema);

export default Skill;
