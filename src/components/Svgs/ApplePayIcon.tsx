import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface ApplePayIconProps{
    color : string
    size : number
}

function ApplePayIcon({color, size}: ApplePayIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 52 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M9.501 2.707c-.61.71-1.584 1.27-2.56 1.19-.121-.96.356-1.979.915-2.608C8.466.559 9.532.04 10.396 0c.1.999-.295 1.978-.895 2.707zm.884 1.38c-1.412-.08-2.62.788-3.29.788-.681 0-1.707-.749-2.825-.729-1.452.02-2.803.83-3.545 2.118-1.523 2.578-.396 6.394 1.077 8.492.721 1.039 1.585 2.178 2.722 2.138 1.077-.04 1.504-.69 2.804-.69 1.31 0 1.686.69 2.824.67 1.178-.02 1.92-1.04 2.64-2.078.823-1.179 1.158-2.328 1.179-2.388-.02-.02-2.276-.869-2.296-3.427-.02-2.138 1.778-3.157 1.859-3.216-1.016-1.48-2.6-1.639-3.149-1.679zm8.156-2.898v15.575H21v-5.325h3.402c3.108 0 5.292-2.098 5.292-5.135s-2.143-5.115-5.21-5.115H18.54zM21 3.227h2.834c2.133 0 3.351 1.119 3.351 3.087 0 1.968-1.218 3.097-3.362 3.097H21V3.227zm13.184 13.657c1.544 0 2.976-.77 3.626-1.988h.05v1.868h2.276V9.011c0-2.247-1.828-3.696-4.642-3.696-2.61 0-4.54 1.469-4.611 3.487h2.214c.183-.96 1.087-1.589 2.326-1.589 1.503 0 2.346.69 2.346 1.958v.86l-3.067.18c-2.854.17-4.398 1.318-4.398 3.316 0 2.018 1.595 3.357 3.88 3.357zm.66-1.848c-1.31 0-2.143-.62-2.143-1.569 0-.979.802-1.548 2.336-1.638l2.733-.17v.88c0 1.458-1.26 2.497-2.926 2.497zM43.174 21c2.396 0 3.524-.9 4.51-3.627L52 5.466h-2.499l-2.895 9.201h-.05L43.66 5.465h-2.57l4.164 11.339-.223.69c-.376 1.168-.985 1.618-2.072 1.618-.193 0-.569-.02-.721-.04v1.868c.142.04.751.06.934.06z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default ApplePayIcon;