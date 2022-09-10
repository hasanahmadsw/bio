import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import { seed } from "../seed";
import Exception from "../utils/exception";
import { requestLoggerMiddleware } from "./middlewares/logger.middleware";
import AdminRouter from "./routers/v1/admin.routes";
import ResumeRouter from "./routers/v1/resume.routes";
import ServiceRouter from "./routers/v1/service.routes";
import SkillRouter from "./routers/v1/skill.routes";
import SocialRouter from "./routers/v1/social.routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(requestLoggerMiddleware);

app.get("/api/v1", (req, res) => {
  res.send({ message: "Welcome to API V1 ✌️!" });
});
app.get("/api/v1/seed", seed);
app.use("/api/v1/resume", ResumeRouter);
app.use("/api/v1/social", SocialRouter);
app.use("/api/v1/services", ServiceRouter);
app.use("/api/v1/skills", SkillRouter);
app.use("/api/v1/admin", AdminRouter);

app.use(Exception.exceptionHandeler);

export default app;
