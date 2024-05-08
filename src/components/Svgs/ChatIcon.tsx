import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface ChatIconProps{
    color : string
    size : number
}

function ChatIcon({color, size}: ChatIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.443 18.98h6.986-6.986zm-1.14-1.835A10.383 10.383 0 01.93 10.5a10.5 10.5 0 1110.5 10.499H1.884a.96.96 0 01-.91-.555.959.959 0 01.201-1.043l2.185-2.185-.059-.07zm2.055.778L4.2 19.08h7.23a8.582 8.582 0 10-6.071-2.51.96.96 0 01.287.67.96.96 0 01-.287.68l-.001.002zm1.298-8.22a.96.96 0 111.066 1.594.96.96 0 01-1.066-1.595zm4.24 0a.959.959 0 111.066 1.594.959.959 0 01-1.066-1.595zm4.24 0a.96.96 0 111.066 1.595.96.96 0 01-1.066-1.596z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default ChatIcon