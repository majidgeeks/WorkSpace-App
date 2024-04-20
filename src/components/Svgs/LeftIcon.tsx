import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LeftIcon(props:any) {
  return (
    <Svg
      width={12}
      height={21}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.392 10.295c-.21.207-.21.207 0 .414.21.206 8.75 8.734 8.75 8.734.356.357.36.931.002 1.289a.905.905 0 01-1.289-.002L.333 11.208C.155 11.02 0 10.786 0 10.502c0-.28.143-.522.325-.699L9.86.27a.909.909 0 011.288-.002.905.905 0 01-.002 1.288c-2.918 2.914-8.544 8.534-8.754 8.74z"
        fill="#18255F"
      />
    </Svg>
  )
}

export default LeftIcon