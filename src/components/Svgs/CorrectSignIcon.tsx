import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface CorrectSignIconProps{
    color : string
    size : number
}

function CorrectSignIcon({color, size}: CorrectSignIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm3.536-13.536A1 1 0 1114.95 7.88l-5.653 5.653-.004.004a.997.997 0 01-1.414 0l-.004-.004-2.825-2.825a1 1 0 111.414-1.414l2.122 2.121 4.95-4.95v-.001z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default CorrectSignIcon;
