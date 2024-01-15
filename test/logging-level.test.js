import winston from "winston";

test("create new logger with console transport", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console({})],
  });

  logger.log({ level: "error", message: "Hello Error" });
  logger.log({ level: "warn", message: "Hello Warn" });
  logger.log({ level: "info", message: "Hello Info" });
  logger.log({ level: "http", message: "Hello Http" });
  logger.log({ level: "verbose", message: "Hello Verbose" });
  logger.log({ level: "silly", message: "Hello Silly" });
});

test("logging with shortcut function", () => {
  const logger = winston.createLogger({
    level: "silly",
    transports: [new winston.transports.Console({})],
  });

  logger.error("Hello Error");
  logger.warn("Hello Warn");
  logger.info("Hello Info");
  logger.http("Hello Http");
  logger.verbose("Hello Verbose");
  logger.silly("Hello Silly");
});
