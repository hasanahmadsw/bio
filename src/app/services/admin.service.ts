import { JWT_SECRET } from "../../config";
import { CreateAdmin, LoginAdmin } from "../../interfaces/schema/admin.schema";
import errorCodes from "../../utils/constants/errorCodes";
import { comparePasswordWithHash, encryptPassword } from "../../utils/encrypt";
import Exception from "../../utils/exception";
import { createToken } from "../middlewares/auth.middleware";
import AdminRepository from "../repositories/admin.repository";

export async function createAdmin(data: CreateAdmin) {
  const insertData = {
    name: data.name,
    email: data.email,
    password: await encryptPassword(data.password),
  };
  const isExist = await AdminRepository.findOneByEmail(data.email);
  if (isExist) throw new Exception(errorCodes.ADMIN_EXISTS);
  await AdminRepository.insert(insertData);
  return;
}

export async function LoginAdmin(data: LoginAdmin) {
  const admin = await AdminRepository.findOneByEmail(data.email);
  if (!admin) throw new Exception(errorCodes.INVALID_LOGIN);
  const isValidPassword = await comparePasswordWithHash(
    data.password,
    admin.password
  );
  if (!isValidPassword) throw new Exception(errorCodes.INVALID_LOGIN);
  const payload = {
    _id: admin._id,
    email: admin.email,
  };
  const token = await createToken(payload, JWT_SECRET);
  return token;
}
