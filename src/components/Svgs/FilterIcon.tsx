import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface FilterIconProps{
 color : string
 size : number
}

function FilterIcon({color, size}:FilterIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M10.009 24c-.2 0-.4-.1-.5-.1-.3-.2-.5-.6-.5-.9v-8.7L.209 1.6c-.2-.3-.3-.7-.1-1.1.2-.3.5-.5.9-.5h22c.4 0 .7.2.9.5.2.3.1.7-.1 1l-8.8 12.8V21c0 .4-.2.7-.6.9l-4 2c-.1.1-.2.1-.4.1zm-7.1-22l7.9 11.4c.1.2.2.4.2.6v7.4l2-1V14c0-.2.1-.4.2-.6l7.9-11.4h-18.2z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default FilterIcon;