import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface CafiteriaIconProps{
    color : string
    size : number
}

function CafiteriaIcon({color, size}: CafiteriaIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 37 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.7.256h11.376c.376 0 .714.255.817.622 0 0 0 0 0 0l.844 2.971h.341c.469 0 .85.384.85.852v3.706a.853.853 0 01-.85.852h-.47l-1.305 16.299L3.7.256zm0 0a.848.848 0 00-.816.621s0 0 0 0L2.04 3.85h-.342a.853.853 0 00-.85.852v3.706c0 .468.382.851.85.851h.471l1.312 16.3s0 0 0 0M3.701.256l-.22 25.302m0 0c.096 1.224.985 2.188 2.089 2.188M3.48 25.558l2.089 2.188m0 0h7.644m-7.644 0h7.644m0 0c1.11 0 1.993-.956 2.089-2.188l-2.089 2.188zm.397-2.324h0a.865.865 0 01-.168.474c-.086.108-.174.145-.229.145H5.57c-.055 0-.143-.037-.23-.145a.866.866 0 01-.167-.473v-.001L3.877 9.258h11.03L13.61 25.422zM2.549 5.553h13.686v2.002H2.55V5.553zm1.79-3.594h10.1l.537 1.89H3.808l.531-1.89zM34.959 3.849h.341s0 0 0 0c.468 0 .85.383.85.852v3.705a.853.853 0 01-.85.852h-.485l-1.305 16.3 1.449-21.71zm0 0L34.115.878s0 0 0 0a.854.854 0 00-.817-.622H21.915a.848.848 0 00-.816.621s0 0 0 0l-.844 2.972h-.342a.853.853 0 00-.85.852v3.705c0 .469.382.852.85.852h.47l1.306 16.3s0 0 0 0c.096 1.224.985 2.187 2.088 2.187h7.645c1.11 0 1.993-.956 2.088-2.187l1.449-21.71zM31.826 25.42v.001a.866.866 0 01-.168.473c-.086.109-.174.146-.229.146h-7.644c-.067 0-.155-.044-.238-.159a.933.933 0 01-.159-.46v-.001L22.092 9.258h11.03l-1.296 16.163zM34.45 5.553v2.002H20.764V5.553H34.45zM22.023 3.849l.532-1.89h10.098l.538 1.89H22.023z"
        fill={color}
        stroke="#B52337"
        strokeWidth={0.3}
      />
      <Path
        d="M27.607 19.688a3.435 3.435 0 000-6.87 3.435 3.435 0 000 6.87zm0-5.173c.953 0 1.726.774 1.726 1.73 0 .957-.773 1.732-1.726 1.732a1.729 1.729 0 01-1.726-1.731c0-.956.773-1.731 1.726-1.731zM7.666 16.246v0c0-.956.773-1.731 1.726-1.731s1.726.775 1.726 1.73c0 .957-.773 1.732-1.726 1.732a1.728 1.728 0 01-1.726-1.731zm1.726 3.442a3.435 3.435 0 000-6.87 3.435 3.435 0 000 6.87z"
        fill={color}
        stroke="#B52337"
        strokeWidth={0.3}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default CafiteriaIcon
