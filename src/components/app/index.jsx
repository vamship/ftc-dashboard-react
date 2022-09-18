import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { socketState } from "../../store";
import { Field } from "../";
import { LogContainer } from "../";
import { WebSocketConnector } from "../";

import "./index.scss";

export function App() {
  const { isConnected } = useRecoilValue(socketState);

  return (
    <div className="app container-fluid">
      <WebSocketConnector url="ws://localhost:10000" />
      {isConnected && (
        <div className="row">
          <div className="col-sm-7">
            <Field />
          </div>
          <div className="col-sm-5">
            <div className="row">
              <LogContainer />
            </div>
            <div className="row">
                <h3 style={{padding: "30px"}}> Other functions go here </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
