import { selector } from "recoil";
import { socketData } from "./";

export const logData = selector({
  key: "LogData",
  get: ({ get }) => {
    const data = get(socketData);

    let logs = data.filter((data) => data.type === "logs");

    // Populate some dummy values because we don't have a websocket server
    // that serves real data.
    const logLevels = ["trace", "debug", "info", "warn", "error"];
    logs = new Array(20).fill(0).map((item, index) => ({
      type: "logs",
      timestamp: Date.now() - Math.floor(Math.random() * 60000),
      message: "This is a sample log message",
      logLevel: logLevels[Math.floor(Math.random() * logLevels.length)],
    }));

    return {
      logs,
    };
  },
});
