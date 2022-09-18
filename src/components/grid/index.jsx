import { useRecoilValue } from "recoil";
import { field } from "../../store";

import "./index.scss";

export function Grid() {
  const { width, height, gridWidth, gridHeight } = useRecoilValue(field);

  const yGrid = new Array(Math.floor(height / gridHeight) + 1)
    .fill(0)
    .map((item, index) => index * gridHeight);

  const xGrid = new Array(Math.floor(width / gridWidth) + 1)
    .fill(0)
    .map((item, index) => index * gridWidth);

  return (
    <g>
      <g stroke="lightgray" strokeDasharray="4 6">
        {yGrid.map((y, index) => (
          <line key={index} x1={0} y1={y} x2={width} y2={y} />
        ))}
      </g>
      <g stroke="lightgray" strokeDasharray="4 6">
        {xGrid.map((x, index) => (
          <line key={index} x1={x} y1={0} x2={x} y2={height} />
        ))}
      </g>
    </g>
  );
}
