import { atom } from "recoil";

export const socketState = atom({
  key: "SocketState",
  default: {
    isConnected: false,
    sendMessage: (message) => undefined,
  },
});
