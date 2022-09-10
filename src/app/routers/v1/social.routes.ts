import { Router } from "express";
import * as SocialHandler from "../../handlers/social.handler";

const router = Router();

router.post("/", SocialHandler.createSocial);
router.get("/", SocialHandler.findSocial);
router.put("/", SocialHandler.updateSocial);
export default router;
