import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface MWaterIconProps{
    color : string
    size : number
}

function MWaterIcon({color, size}: MWaterIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 21 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M18.47 10.799C16.316 7.463 14.106 4.183 11.95.847c-.498-.735-1.437-.735-1.935 0C8.688 2.826 7.417 4.805 6.09 6.784c-1.603 2.432-3.427 4.863-4.366 7.69-.83 2.432-1.106 5.26-.443 7.804.608 2.262 2.046 4.241 3.87 5.598 3.813 2.828 9.285 2.319 12.657-.961 4.532-4.184 3.758-11.253.663-16.116zm-1.436 13.854c-2.543 3.11-7.075 3.789-10.391 1.527-1.603-1.074-2.764-2.827-3.261-4.75-.553-2.262-.11-4.75.718-6.899.885-2.261 2.488-4.354 3.814-6.39 1.05-1.583 2.045-3.166 3.095-4.75 1.824 2.828 3.704 5.655 5.527 8.483 2.377 3.732 3.482 9.16.498 12.78z"
        fill={color}
      />
      <Path
        d="M16.15 17.754c-.608 0-1.105.509-1.105 1.13 0 1.075-.443 2.15-1.161 2.885-.774.791-1.769 1.187-2.874 1.187-.553 0-1.106.51-1.106 1.131 0 .622.498 1.131 1.106 1.131a6.205 6.205 0 004.421-1.866 6.498 6.498 0 001.824-4.524c0-.565-.497-1.13-1.105-1.074z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default MWaterIcon;