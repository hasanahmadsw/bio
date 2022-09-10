import { Router } from "express";
import * as ResumeHandler from "../../handlers/resume.handler";

const router = Router();

router.post("/", ResumeHandler.createResume);
router.get("/", ResumeHandler.findResume);
router.post("/experience", ResumeHandler.addExperience);
router.delete("/experience/:id", ResumeHandler.deleteExperience);
router.post("/education", ResumeHandler.addEducation);
router.delete("/education/:id", ResumeHandler.deleteEducation);
router.post("/certificate", ResumeHandler.addCertificate);
router.delete("/certificate/:id", ResumeHandler.deleteCertificate);
router.put("/", ResumeHandler.updateResume);
export default router;
