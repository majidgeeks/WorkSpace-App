import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface ClockIconProps{
    color : string
    size : number
}

function ClockIcon({color, size} : ClockIconProps ) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M10.4 7.2H8.8V4a.8.8 0 10-1.6 0v4a.8.8 0 00.8.8h2.4a.8.8 0 100-1.6zM8 0a8 8 0 108 8 8.009 8.009 0 00-8-8zm0 14.4A6.4 6.4 0 1114.4 8 6.407 6.407 0 018 14.4z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default ClockIcon;