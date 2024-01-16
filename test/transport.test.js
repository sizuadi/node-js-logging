import winston from "winston";
import TransportStream from "winston-transport";
test("create new logger with new transport", () => {
  class MyTransport extends TransportStream {
    constructor(option) {
      super(option);
    }

    log(info, next) {
      console.log(
        `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`
      );

      next();
    }
  }

  const logger = winston.createLogger({
    level: "info",
    transports: [new MyTransport({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello Http");
  logger.verbose("Hello Verbose");
  logger.silly("Hello Silly");
});
