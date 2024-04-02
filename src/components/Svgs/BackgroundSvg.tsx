import * as React from "react"
import Svg, { G, Path, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */ 

const BackgroundSvg = ({...props}) => {
  return (
    
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 375 812"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <G filter="url(#filter0_f_3047_12054)">
        <Path fill="url(#pattern0)" d="M-2102 -64H898V1936H-2102z" />
      </G>
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_3047_12054" transform="scale(.00033 .0005)" />
        </Pattern>
        <Image
          id="image0_3047_12054"
          width={3000}
          height={2000}
        />
      </Defs>
    </Svg>
  )
}
export default BackgroundSvg;