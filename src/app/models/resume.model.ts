import { Model, model, Schema } from "mongoose";
import {
  ICertificate,
  IEducation,
  IExperience,
  IResume,
} from "../../interfaces/schema/resume.schema";

const experienceSchema = new Schema<IExperience>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  breif: { type: String, required: true },
  date: { type: String, required: true },
});
const educationSchema = new Schema<IEducation>({
  title: { type: String, required: true },
  university: { type: String, required: true },
  breif: { type: String, required: true },
  date: { type: String, required: true },
});
const certificateSchema = new Schema<ICertificate>({
  title: { type: String, required: true },
  source: { type: String, required: true },
  breif: { type: String, required: true },
  date: { type: String, required: true },
});

const resumeSchema = new Schema<IResume>({
  summary: { type: String, required: true },
  name: { type: String, required: true },
  birthday: { type: String, required: true },
  nationality: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  experiences: [experienceSchema],
  educations: [educationSchema],
  certificates: [certificateSchema],
});

const Resume: Model<IResume> = model<IResume>("Resume", resumeSchema);

export default Resume;
