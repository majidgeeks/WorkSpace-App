import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface SearchIconProps{
    color : string
    size : number
}

function SearchIcon({color, size}:SearchIconProps) {
    return (
      <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.66 15.017l-.084.106 4.119 4.107a1.03 1.03 0 010 1.464v.001a1.028 1.028 0 01-1.465 0l-4.107-4.119-.106.084a9.22 9.22 0 01-5.704 1.967 9.314 9.314 0 119.314-9.313 9.219 9.219 0 01-1.967 5.703zM3.284 5.285a7.251 7.251 0 1012.059 8.057A7.251 7.251 0 003.284 5.285z"
        fill={color}
      />
    </Svg>
  </SvgScaleView>
  )
}

export default SearchIcon