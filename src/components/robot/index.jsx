import { useRecoilValue } from "recoil";
import { robot } from "../../store";

import "./index.scss";

export function Robot({ position: { x, y } }) {
  const { width, height } = useRecoilValue(robot);

  return (
    <g stroke="gray" fill="white">
      <rect
        x={x - width / 2}
        y={y - height / 2}
        width={width}
        height={height}
      />
    </g>
  );
}
