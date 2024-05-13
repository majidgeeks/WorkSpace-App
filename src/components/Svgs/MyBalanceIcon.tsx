import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface MyBalanceIconProps{
    color : string
    size : number
}

function MyBalanceIcon({color, size} : MyBalanceIconProps) {
  return (
    <SvgScaleView size={size} >
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 25 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    
    >
      <Path
        d="M17.74 0c4.211 0 6.7 2.418 6.7 6.524v.046h-5.176c-2.408.004-4.36 1.906-4.364 4.255-.003 2.353 1.95 4.264 4.364 4.268h5.18v.373c0 4.106-2.488 6.534-6.7 6.534H6.701C2.49 22 0 19.572 0 15.466V6.524C0 2.418 2.489 0 6.702 0H17.74zm-5.05 4.736H5.793a.924.924 0 00-.931.909.924.924 0 00.93.915H12.7a.924.924 0 00.931-.916.925.925 0 00-.94-.908z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default MyBalanceIcon;