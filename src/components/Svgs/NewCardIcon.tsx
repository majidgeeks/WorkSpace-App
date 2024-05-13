import * as React from "react"
import Svg, { Path } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"

interface NewCardIconProps{
    color : string
    size : number
}

function NewCardIcon({color, size}: NewCardIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 36 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M32.492 0H2.572A2.58 2.58 0 000 2.58v16.54a2.58 2.58 0 002.572 2.58h29.956a2.587 2.587 0 002.543-2.58V2.58A2.587 2.587 0 0032.49 0zM9.44 16.074a1.52 1.52 0 01-1.52 1.52h-3.2a1.52 1.52 0 01-1.52-1.52v-3.178a1.52 1.52 0 011.52-1.52h3.2a1.52 1.52 0 011.52 1.52v3.178zm5.75 1.52h-1.68a.73.73 0 010-1.462h1.68a.73.73 0 010 1.462zm4.464 0h-1.68a.73.73 0 010-1.462h1.68a.731.731 0 010 1.462zm4.472 0h-1.688a.73.73 0 010-1.462h1.673a.731.731 0 010 1.462h.015zm4.464 0h-1.688a.73.73 0 010-1.462h1.688a.73.73 0 010 1.462zm-.68-8.476a3.266 3.266 0 01-1.877-.584 3.266 3.266 0 01-1.878.584 3.332 3.332 0 110-6.663 3.266 3.266 0 011.878.584 3.266 3.266 0 011.877-.584 3.332 3.332 0 110 6.663z"
        fill={color}
      />
    </Svg>
    </SvgScaleView>
  )
}

export default NewCardIcon;