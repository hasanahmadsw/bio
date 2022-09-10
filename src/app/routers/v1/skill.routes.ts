import { Router } from "express";
import * as SkillHandler from "../../handlers/skill.handler";

const router = Router();

router.post("/", SkillHandler.createSkill);
router.get("/", SkillHandler.findSkills);
router.put("/:id", SkillHandler.updateSkill);
router.delete("/:id", SkillHandler.deleteSkill);

export default router;
