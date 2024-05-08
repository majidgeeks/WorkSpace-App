import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface LocationIconProps{
  color : string
  size : number
}

function LocationIcon({color, size} : LocationIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75 6.992v.005a6.929 6.929 0 001.596 4.133l.005.007a16.177 16.177 0 004.229 3.686.754.754 0 01.082.057.1.1 0 00.062.02.1.1 0 00.063-.02.74.74 0 01.084-.059 16.722 16.722 0 003.008-2.305c1.59-1.563 2.777-3.46 2.82-5.42V7.03c.01-2.994-2.604-5.52-5.954-5.53-3.35-.01-5.983 2.498-5.995 5.492zm-1.5-.004c.014-3.922 3.423-7 7.5-6.988 4.076.013 7.462 3.113 7.448 7.034v.085c-.051 2.533-1.558 4.787-3.27 6.47l-.004.003a18.221 18.221 0 01-3.243 2.492c-.563.42-1.352.42-1.915 0a17.673 17.673 0 01-4.581-4.004A8.427 8.427 0 01.25 7.012v-.024z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.724 5.854c-.828 0-1.406.612-1.406 1.257 0 .644.578 1.257 1.406 1.257.827 0 1.405-.613 1.405-1.257 0-.645-.578-1.257-1.405-1.257zM4.818 7.11c0-1.572 1.352-2.757 2.906-2.757 1.553 0 2.905 1.185 2.905 2.757S9.277 9.868 7.724 9.868c-1.554 0-2.906-1.185-2.906-2.757z"
        fill="#B52337"
      />
    </Svg>
    </SvgScaleView>
  )
}

export default LocationIcon
