export interface IExperience {
  _id: string;
  title: string;
  company: string;
  date: string;
  breif: string;
}

export interface IEducation {
  title: string;
  university: string;
  date: string;
  breif: string;
}
export interface ICertificate {
  title: string;
  breif: string;
  source: string;
  date: string;
}

export interface IResume {
  name: string;
  summary: string;
  nationality: string;
  address: string;
  birthday: string;
  email: string;
  phone: string;
  experiences: IExperience[];
  educations: IEducation[];
  certificates: ICertificate[];
}

export type CreateResume = Omit<
  IResume,
  "experiences" | "educations" | "certificates"
>;
