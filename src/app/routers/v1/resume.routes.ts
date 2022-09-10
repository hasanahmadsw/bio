import { Router } from "express";
import * as ResumeHandler from "../../handlers/resume.handler";

const router = Router();

router.post("/", ResumeHandler.createResume);
router.get("/", ResumeHandler.findResume);
router.post("/experience", ResumeHandler.addExperience);
router.delete("/experience/:id", ResumeHandler.deleteExperience);
router.put("/", ResumeHandler.updateResume);
export default router;
