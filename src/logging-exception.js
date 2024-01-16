import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.File({
      handleExceptions: true,
      filename: "./src/exception.log",
    }),
  ],
});

hello();
