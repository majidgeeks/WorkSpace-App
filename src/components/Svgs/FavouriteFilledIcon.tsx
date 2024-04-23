import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface FavouriteFilledIconProps{
    color : string
    size : number
}

function FavouriteFilledIcon({color, size}: FavouriteFilledIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 25 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M12.745 3.154l.725-.887C14.692 1.087 16.053.5 17.765.5a6.6 6.6 0 013.59 1.057 6.296 6.296 0 012.372 2.805 6.068 6.068 0 01.366 3.603 6.192 6.192 0 01-1.76 3.197v.002l-9.228 9.035s0 0 0 0a1.084 1.084 0 01-1.494 0l-9.227-9.035-.002-.002A6.192 6.192 0 01.623 7.964 6.069 6.069 0 01.99 4.362a6.297 6.297 0 012.372-2.805A6.6 6.6 0 016.952.5c1.705 0 3.07.635 4.301 1.83l.728.836.39.447.374-.46z"
        fill={color}
        stroke="#B52337"
      />
    </Svg>
    </SvgScaleView>
  )
}

export default FavouriteFilledIcon