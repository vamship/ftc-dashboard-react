import { useRecoilValue } from "recoil";
import { field } from "../../store";

import "./index.scss";

export function Terminal({ color, position }) {
  const { width, height, gridWidth, gridHeight } = useRecoilValue(field);

  const refWidth = 100;
  const refHeight = 100;
  const refThickness = width / 72;

  const offset = refThickness * Math.SQRT2;

  const xScale = (gridWidth / gridHeight) * (gridWidth / refWidth);
  const yScale = (gridHeight / refHeight);

  const transformProps = {
    topleft: { xDir: 1, yDir: 1, xPos: 0, yPos: height - gridHeight },
    topright: {
      xDir: -1,
      yDir: 1,
      xPos: width,
      yPos: height - gridHeight,
    },
    bottomleft: {
      xDir: 1,
      yDir: -1,
      xPos: 0,
      yPos: gridHeight,
    },
    bottomright: {
      xDir: -1,
      yDir: -1,
      xPos: width,
      yPos: gridHeight,
    },
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

  const transformMatrix = [
    transformProps.xDir * xScale,
    0,
    0,
    transformProps.yDir * yScale,
    transformProps.xPos,
    transformProps.yPos,
  ].join(",");

  return (
    <g stroke={color} fill={color}>
      <polygon points={points} transform={`matrix(${transformMatrix})`} />
    </g>
  );
}
