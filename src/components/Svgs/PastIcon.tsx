import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface PastIconProps{
    color : string
    size : number
}

function PastIcon({color, size}: PastIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 29 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M1.14 12.106h26.735M20.566 1v4.936M8.449 1v4.936"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M20.857 3.369h-12.7C3.75 3.369 1 5.823 1 10.333v13.575C1 28.489 3.751 31 8.156 31h12.687C25.264 31 28 28.532 28 24.021V10.333c.014-4.51-2.724-6.964-7.143-6.964z"
        stroke="#323232"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.47 20.47a.75.75 0 000 1.06l4.773 4.773a.75.75 0 001.06-1.06L8.061 21l4.242-4.243a.75.75 0 00-1.06-1.06L6.47 20.47zM7 21.75h15v-1.5H7v1.5z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default PastIcon
