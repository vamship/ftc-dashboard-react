import { logData } from "../../store";
import { useRecoilValue } from "recoil";
import { LogToolbar, LogRecord } from "../";

import "./index.scss";

export function LogContainer() {
  const { logs } = useRecoilValue(logData);

  return (
    <div className="log-container">
      <LogToolbar />
      <div className="log-list">
        {logs.map((log, index) => (
          <LogRecord key={index} log={log} />
        ))}
      </div>
    </div>
  );
}
