import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface WifiIconProps{
    color : string
    size : number
}

function WifiIcon({color, size}: WifiIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.201.566C18.66.453 22.717 2.074 26.414 4.76c.306.222.613.444.911.677.734.574.885 1.457.377 2.175-.479.677-1.391.836-2.148.362-1.74-1.09-3.519-2.112-5.47-2.768-5.125-1.723-10.09-1.238-14.893 1.18-.901.454-1.773.961-2.634 1.49-.9.551-1.776.418-2.29-.341C-.23 6.796-.026 5.93.79 5.31 3.638 3.144 6.75 1.544 10.3.892a18.928 18.928 0 013.9-.326z"
        fill={color}
      />
      <Path
        d="M14.014 7.51c2.957-.054 5.548 1.007 7.965 2.599.383.251.766.498 1.133.772.685.516.82 1.313.357 1.956-.458.632-1.258.737-1.97.291-5.01-3.14-10.021-3.143-15.037-.011-.746.465-1.548.355-2.003-.307-.454-.66-.28-1.463.447-1.977 1.888-1.335 3.86-2.504 6.152-3.018.975-.218 1.963-.292 2.956-.304zM14.345 14.102c1.518.008 3.136.748 4.574 1.933.51.42.592 1.08.255 1.621-.328.524-.967.73-1.574.488-.453-.18-.896-.382-1.344-.577-1.582-.678-3.155-.617-4.721.055-.405.173-.802.366-1.212.529a1.263 1.263 0 01-1.73-1.379c.053-.298.213-.568.45-.756 1.434-1.16 3.033-1.91 5.303-1.914zM13.944 25.453c-1.336-.005-2.432-1.113-2.429-2.457a2.462 2.462 0 012.503-2.465c1.375.008 2.431 1.094 2.42 2.492-.014 1.36-1.117 2.436-2.494 2.43z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default WifiIcon
