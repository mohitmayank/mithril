import React from "react";
import { number, bool } from "prop-types";

const pad = (n) => (n < 10 ? `0${n}` : n);

const format = (t) => `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(t.getUTCSeconds())}`;

function Clock(props) {
  return <div className={props.light ? "light" : ""}>
    {format(new Date(props.lastUpdate))}
    <style jsx>{`
        div {
          padding: 15px;
          color: #82FA58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
  </div>;
}

Clock.propTypes = {
  light: bool,
  lastUpdate: number,
};

export default Clock;
