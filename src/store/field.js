import { atom } from "recoil";

const WIDTH=600;
const HEIGHT=WIDTH;
const DIVISIONS=6;

export const field = atom({
  key: "Field",
  default: {
      width: WIDTH,
      height: HEIGHT,
      gridWidth: WIDTH/DIVISIONS,
      gridHeight: HEIGHT/DIVISIONS,
      showGrid: true
  }
});
