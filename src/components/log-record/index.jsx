import "./index.scss";

export function LogRecord({ log: { timestamp, message, logLevel } }) {
  const dt = new Date(timestamp);
  return (
    <div className="log-record">
      <span className="field timestamp">{dt.toLocaleString()}</span>
      <span className={`field log-level-${logLevel}`}>[{logLevel}]</span>
      <span className="field message">{message}</span>
    </div>
  );
}
