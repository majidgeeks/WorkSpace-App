import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface NotificationIconProps{
    color : string
    size : number
}

function NotificationIcon({color, size}: NotificationIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Path
        d="M0 24c0 .1 0 .2.1.3v.2c0 .1.1.2.2.2.1.1.2.1.2.2h.1c.2.1.3.1.4.1h7.1c.4 1.7 2 3 3.9 3s3.4-1.3 3.9-3H23c.6 0 1-.4 1-1 0-.3-.1-.5-.3-.7L22 20.7V16c0-4.4-2.9-8.2-6.9-9.5.6-.7.9-1.6.9-2.5 0-2.2-1.8-4-4-4S8 1.8 8 4c0 .9.3 1.8.9 2.5C4.9 7.8 2 11.6 2 16v4.7L.2 23.4s0 .1-.1.1v.1c-.1.2-.1.3-.1.4zm12 2c-.7 0-1.4-.4-1.7-1h3.4c-.3.6-1 1-1.7 1zM10 4c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM3.8 21.6c.1-.2.2-.4.2-.6v-5c0-4.4 3.6-8 8-8s8 3.6 8 8v5c0 .2.1.4.2.6l1 1.4H2.9l.9-1.4z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default NotificationIcon;