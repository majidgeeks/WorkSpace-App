import * as React from "react"
import Svg, { Path } from "react-native-svg"

function PlusIcon(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11.294.487a1.184 1.184 0 00-1.2 1.167l-.117 8.29-8.29-.116a1.184 1.184 0 00-.033 2.368l8.29.117-.117 8.289a1.184 1.184 0 002.368.034l.117-8.29 8.29.116a1.18 1.18 0 001.2-1.167 1.184 1.184 0 00-1.167-1.2l-8.29-.117.117-8.29A1.185 1.185 0 0011.294.487z"
        fill="#FCFCFC"
      />
    </Svg>
  )
}

export default PlusIcon;