import { useState } from "react";
import { useRecoilState } from "recoil";
import useWebSocket from "react-use-websocket";

import { socketState, socketData } from "../../store";
import "./index.scss";

export function WebSocketConnector({ url }) {
  const [sockState, setSocketState] = useRecoilState(socketState);
  const [sockData, setSocketData] = useRecoilState(socketData);

  const { sendMessage } = useWebSocket(url, {
    onMessage: (event) => {
      setSocketData([...sockData, event.data]);
    },
    share: true,
    onOpen: () =>
      setSocketState({
        ...sockState,
        sendMessage,
        isConnected: true,
      }),
    onClose: () =>
      setSocketState({
        ...sockState,
        sendMessage: (message) => undefined,
        isConnected: false,
      }),
    shouldReconnect: (closeEvent) => true,
  });

  const send = () => sendMessage("hello");

  return (
    <div
      className="web-socket-connector"
      style={{ display: !sockState.isConnected ? "block" : "none" }}
    >
      Waiting to connect...
    </div>
  );
}
