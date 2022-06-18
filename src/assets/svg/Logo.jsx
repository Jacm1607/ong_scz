import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
      <g data-name="Group 101" transform="translate(-375 -21)">
        {/* <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" /> */}
        <rect data-name="Rectangle 11" width={12} height={8} rx={4} transform="translate(382 21)" fill="#ff0007" />
        <rect data-name="Rectangle 15" width={18} height={8} rx={4} transform="translate(382 37)" fill="#0078c3" />
        <rect data-name="Rectangle 12" width={11} height={8} rx={4} transform="translate(375 29)" fill="#ffef00" />
      </g>
    </svg>
  );
}

export default SvgComponent;
