import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface DownArrowIconProps{
    color : string
    size : number
}

function DownArrowIcon({color, size}: DownArrowIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M.235.247a.866.866 0 000 1.187l5.314 5.57c.25.262.652.262.902 0l5.314-5.57a.866.866 0 000-1.187.773.773 0 00-1.132 0L5.997 5.1 1.36.24A.771.771 0 00.235.248z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default DownArrowIcon