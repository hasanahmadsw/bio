import { Router } from "express";
import { createValidator } from "express-joi-validation";
import * as AdminHandler from "../../handlers/admin.handler";
import { login } from "../../validation/admin.validation";
const validator = createValidator();

const router = Router();

router.post("/login", validator.body(login), AdminHandler.loginAdmin);

export default router;
