import app from "./app";
import { PORT } from "./config";
import { connectDB } from "./db";
import logger from "./utils/logger";

(async () => {
  await connectDB();
  app.listen(PORT, () => {
    logger.info(`API running at http://localhost:${PORT}/api/v1/`);
  });
})();
