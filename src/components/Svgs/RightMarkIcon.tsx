import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function RightMarkIcon(props) {
  return (
    <Svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={30} cy={30} r={30} fill="#B52337" />
      <Path
        d="M24 38.34l-6.94-6.94c-.78-.78-2.04-.78-2.82 0-.78.78-.78 2.04 0 2.82l8.36 8.36c.78.78 2.04.78 2.82 0l21.16-21.16c.78-.78.78-2.04 0-2.82-.78-.78-2.04-.78-2.82 0L24 38.34z"
        fill="#FCFCFC"
      />
    </Svg>
  )
}

export default RightMarkIcon;