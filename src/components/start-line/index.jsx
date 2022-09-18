import { useRecoilValue } from "recoil";
import { field } from "../../store";

import "./index.scss";

export function StartLine({ color, position }) {
  const { width, height, gridWidth, gridHeight } = useRecoilValue(field);

  const refWidth = 100;
  const refHeight = 100;
  const refThickness = width / 72;

  const offset = refThickness * Math.SQRT2;

  const xScale = (gridWidth / gridHeight) * (gridWidth / refWidth);
  const yscale = gridHeight / refHeight;

  const transformProps = {
    topleft: {
      xDir: 1,
      yDir: -1,
      xPos: (width - gridWidth - refThickness) * 0.5,
      yPos: height - 2 * gridHeight,
    },
    bottomleft: {
      xDir: 1,
      yDir: 1,
      xPos: (width - gridWidth - refThickness) * 0.5,
      yPos: 0,
    },
    topright: {
      xDir: 1,
      yDir: -1,
      xPos: (width + gridWidth - refThickness) * 0.5,
      yPos: height - 2 * gridHeight,
    },
    bottomright: {
      xDir: 1,
      yDir: 1,
      xPos: (width + gridWidth - refThickness) * 0.5,
      yPos: 0,
    },
  }[position];

  if (!transformProps) {
    return <g />;
  }

  const points = [
    [0, 0],
    [0, refHeight],
    [offset, refHeight],
    [offset, 0],
  ]
    .map(([x, y]) => `${x}, ${y}`)
    .join(" ");

  const transformMatrix = [
    transformProps.xDir * xScale,
    0,
    0,
    transformProps.yDir * yscale * -1,
    transformProps.xPos,
    transformProps.yPos + gridHeight,
  ].join(",");

  return (
    <g stroke={color} fill={color}>
      <polygon points={points} transform={`matrix(${transformMatrix})`} />
    </g>
  );
}
