import { useRecoilValue } from "recoil";
import { field } from "../../store";

import "./index.scss";

export function SubStation({ color, position }) {
  const { width, height, gridWidth, gridHeight } = useRecoilValue(field);

  const refWidth = 100;
  const refHeight = 100;
  const refThickness = width / 36;

  const offset = refThickness * Math.SQRT2;

  const xScale = 0.5 * (gridWidth / gridHeight) * (gridWidth / refWidth);
  const yscale = 0.5 * (gridHeight / refHeight);

  const transformProps = {
    left: { xDir: 1, yDir: 1, xPos: 0, yPos: (height-gridHeight) * 0.5 },
    right: { xDir: -1, yDir: 1, xPos: width, yPos: (height-gridHeight) * 0.5 },
  }[position];

  if (!transformProps) {
    return <g />;
  }

  const points = [
    [0, 0],
    [refWidth, refHeight],
    [refWidth - offset, refHeight],
    [0, offset],
  ]
    .map(([x, y]) => `${x}, ${y}`)
    .join(" ");

  const bottomTransformMatrix = [
    transformProps.xDir * xScale,
    0,
    0,
    transformProps.yDir * yscale,
    transformProps.xPos,
    transformProps.yPos,
  ].join(",");

  const topTransformMatrix = [
    transformProps.xDir * xScale,
    0,
    0,
    transformProps.yDir * yscale * -1,
    transformProps.xPos,
    transformProps.yPos + gridHeight,
  ].join(",");

  return (
    <g stroke={color} fill={color}>
      <polygon points={points} transform={`matrix(${bottomTransformMatrix})`} />
      <polygon points={points} transform={`matrix(${topTransformMatrix})`} />
    </g>
  );
}
