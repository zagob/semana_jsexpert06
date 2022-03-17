import config from "./config.js";
import server from "./server.js";
import { logger } from "./util.js";

server.listen(config.port, () =>
  logger.info(`Server online... at ${config.port}`)
);
