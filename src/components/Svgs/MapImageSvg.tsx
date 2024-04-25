import * as React from "react"
import Svg, { Mask, Path, G, Defs, Pattern, Use, Image } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface MapImageSvgProps{
 color : string
 size : number
}

function MapImageSvg({color, size}: MapImageSvgProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 375 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      
    >
      <Mask
        id="a"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={375}
        height={100}
      >
        <Path fill={color} d="M0 0H375V100H0z" />
      </Mask>
      <G mask="url(#a)">
        <Path fill="url(#pattern0_1082_11786)" d="M-178 0H459V572H-178z" />
      </G>
      <Defs>
        <Pattern
          id="pattern0_1082_11786"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#image0_1082_11786"
            transform="matrix(.00055 0 0 .00062 -.097 0)"
          />
        </Pattern>
        <Image
          id="image0_1082_11786"
          width={2160}
          height={1624}
        />
      </Defs>
    </Svg>
    </SvgScaleView>
  )
}
export default MapImageSvg