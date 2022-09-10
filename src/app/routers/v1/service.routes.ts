import { Router } from "express";
import * as ServiceHandler from "../../handlers/service.handler";

const router = Router();

router.post("/", ServiceHandler.createService);
router.get("/", ServiceHandler.findServices);
router.get("/:slug", ServiceHandler.findServiceBySlug);
router.put("/:id", ServiceHandler.updateService);
router.delete("/:id", ServiceHandler.deleteService);

export default router;
