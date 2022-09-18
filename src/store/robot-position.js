import { selector } from "recoil";
import { socketData } from "./";

export const robotPosition = selector({
  key: "RobotPosition",
  get: ({ get }) => {
    const data = get(socketData);

    let points = data.filter((data) => data.type === "position");

    // Populate some dummy values because we don't have a websocket server
    // that serves real data.
    points = new Array(20).fill(0).map((item, index) => ({
      x: index * 10,
      y: index ** 2,
      heading: Math.floor(Math.random() * 360),
    }));

    return {
      latest:
        points.length > 0
          ? points[points.length - 1]
          : { x: 0, y: 0, heading: 90 },
      points,
    };
  },
});
