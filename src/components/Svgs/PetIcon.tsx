import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface PetIconProps{
    color : string
    size : number
}

function PetIcon({color, size}: PetIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M16.205 18.051h-3.5v-1.533H20.175c4.148-.268 7.442-3.719 7.442-7.932 0 0 0 0 0 0v-.064h0c0-.715-.582-1.297-1.297-1.297h-6.619c-.743 0-1.442-.29-1.968-.815h0l-3.634-3.634 2.106 15.275zm0 0a4.704 4.704 0 00-1.278 3.225v1.22H2.434v-5.322c1.08 1.311 2.87 2.325 5.781 2.49h0a2.921 2.921 0 002.165-.789l-.102-.108.102.108c.582-.55.904-1.295.904-2.096V6.976H9.75v9.803c0 .376-.15.724-.423.982h0c-.278.262-.64.395-1.026.373h0c-1.357-.077-2.825-.401-3.95-1.26-1.118-.853-1.918-2.248-1.918-4.516v-7.34s0 0 0 0a2.639 2.639 0 012.635-2.635h8.08c.36 0 .696.14.95.393l2.106 15.275zM26.503 5.698l.001-.007h-6.803c-.334 0-.648-.13-.884-.366l-3.633-3.633h0A2.86 2.86 0 0013.15.849H5.07A4.173 4.173 0 00.9 5.018v24.08h15.56v-7.822a3.202 3.202 0 013.197-3.198c.13 0 .262-.009.387-.017l.14-.01h.273v-.017c4.86-.408 8.693-4.484 8.693-9.448v-.065a2.833 2.833 0 00-2.647-2.823zM2.433 27.565V24.03h12.494v3.537H2.434z"
        fill={color}
        stroke="#B52337"
        strokeWidth={0.3}
      />
      <Path
        d="M11.125 9.448a1.227 1.227 0 100-2.453 1.227 1.227 0 000 2.453z"
        fill={color}
        stroke="#B52337"
        strokeWidth={0.5}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default PetIcon;
