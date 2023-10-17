import React from "react";
import classNames from "classnames";

const DashLine = ({ order }) => {
  return (
    <svg
      className={classNames("absolute z-0 left-[34%] group-last:hidden ", {
        "transform scale-x-[-1] !left-auto right-[34%] ": order == 2,
      })}
      width="780"
      height="423"
      viewBox="0 0 755 323"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.935 43.0908C136.473 49.4265 227.193 31.9777 362.265 64.0931C497.336 96.2084 491.794 125.082 486.687 149.55C481.581 174.019 336.91 163.994 345.336 145.205C353.762 126.417 435.21 47.0692 514.619 87.2679C594.028 127.467 580.229 220.784 608.571 278.461"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="26 37"
      />
    </svg>
  );
};

export default DashLine;
