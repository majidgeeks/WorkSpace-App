import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface AdressIconProps{
    color : string
    size : number
}

function AdressIcon({color, size}: AdressIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <G clipPath="url(#clip0_3047_11750)" fill="#757575">
        <Path d="M8 10.001a2 2 0 100-4 2 2 0 000 4z" />
        <Path d="M14.666 7.335h-1.379a5.338 5.338 0 00-4.62-4.621v-1.38H7.332v1.38a5.339 5.339 0 00-4.62 4.62h-1.38v1.334h1.38a5.339 5.339 0 004.62 4.62v1.38h1.333v-1.38a5.339 5.339 0 004.621-4.62h1.38V7.335zM8 12c-2.206 0-4-1.794-4-4 0-2.205 1.794-4 4-4s4 1.795 4 4c0 2.206-1.794 4-4 4z" />
      </G>
      <Defs>
        <ClipPath id="clip0_3047_11750">
          <Path fill={color} d="M0 0H16V16.0013H0z" />
        </ClipPath>
      </Defs>
    </Svg>
    </SvgScaleView>
  )
}

export default AdressIcon