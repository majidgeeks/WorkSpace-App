import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface CorrectSignOutlineIconProps{
    color : string
    size : number
}

function CorrectSignOutlineIcon({color, size}: CorrectSignOutlineIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M6 10.17L2.53 6.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L17.29 1.71A.996.996 0 1015.88.3L6 10.17z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default CorrectSignOutlineIcon