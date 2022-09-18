import { atom } from "recoil";

export const robot = atom({
  key: "Robot",
  default: {
      height: 50,
      width: 50
  }
});
