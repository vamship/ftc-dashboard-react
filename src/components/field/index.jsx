import { useRecoilValue } from "recoil";
import { field, robotPosition } from "../../store";
import { Grid, Robot, Terminal, StartLine, SubStation } from "../";

import "./index.scss";

export function Field() {
  const { latest, points } = useRecoilValue(robotPosition);
  const { width, height } = useRecoilValue(field);

  return (
    <div className="field">
      <div>
        Robot Position: ({latest.x}, {latest.y})
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        transform="scale(1,-1)"
      >
        <Grid />
        <Terminal color="red" position="topleft" />
        <Terminal color="blue" position="bottomleft" />
        <Terminal color="blue" position="topright" />
        <Terminal color="red" position="bottomright" />

        <SubStation color="blue" position="left" />
        <SubStation color="red" position="right" />

        <StartLine color="blue" position="topleft" />
        <StartLine color="blue" position="bottomleft" />
        <StartLine color="red" position="topright" />
        <StartLine color="red" position="bottomright" />
        <g stroke="black" fill="black">
          {points.map(({ x, y }, index) => (
            <circle key={index} cx={x} cy={y} r="1" />
          ))}
        </g>
        <Robot position={{ x: latest.x, y: latest.y }} />
      </svg>
    </div>
  );
}
