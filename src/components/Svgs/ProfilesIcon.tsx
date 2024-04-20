import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface ProfilesIconProps{
    color : string
    size : number
}

function ProfilesIcon({color, size}: ProfilesIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width={21}
      height={21}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M10.503-.001c-2.889 0-5.251 2.363-5.251 5.252 0 2.89 2.362 5.245 5.251 5.245a5.253 5.253 0 005.244-5.245c0-2.89-2.354-5.252-5.244-5.252zm0 1.75a3.483 3.483 0 013.494 3.502 3.475 3.475 0 01-3.494 3.493 3.483 3.483 0 01-3.501-3.493 3.49 3.49 0 013.501-3.502zM10.5 12.248c-2.85 0-5.431.93-7.333 2.364C1.265 16.045 0 18.014 0 20.124a.875.875 0 00.875.875h19.25a.875.875 0 00.875-.875c0-2.11-1.265-4.079-3.167-5.512-1.902-1.434-4.483-2.364-7.333-2.364zm0 1.75c2.466 0 4.697.82 6.279 2.012 1.257.947 1.924 2.103 2.208 3.239H2.013c.284-1.136.951-2.292 2.208-3.24C5.803 14.819 8.034 14 10.5 14z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default ProfilesIcon