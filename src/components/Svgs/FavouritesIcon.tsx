import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface FavouritesIconProps{
    color : string
    size : number
}

function FavouritesIcon({ color, size}:FavouritesIconProps) {
  return (
    <SvgScaleView size={size} >
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.028 18.1l8.754-8.755a4.333 4.333 0 10-6.126-6.127l-1.25 1.25c-.841.84-2.205.84-3.045 0l-1.25-1.25a4.332 4.332 0 10-6.127 6.127l8.754 8.755c.08.08.21.08.29 0zm-.29-15.01c.08.08.21.08.29 0l1.25-1.25a6.279 6.279 0 0110.244 2.038 6.279 6.279 0 01-1.362 6.845L12.883 21 2.606 10.723a6.28 6.28 0 118.883-8.883l1.25 1.25z"
        fill={color}
      />
    </Svg>
  </SvgScaleView>
  )
}

export default FavouritesIcon