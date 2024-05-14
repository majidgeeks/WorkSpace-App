import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function AverageEmojiIcon(props) {
  return (
    <Svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.133 46.969c12.777 0 23.134-10.357 23.134-23.133S35.909.702 23.133.702 0 11.06 0 23.836c0 12.776 10.357 23.133 23.133 23.133z"
        fill="url(#paint0_linear_994_18705)"
      />
      <Path
        d="M14.163 19.432c1.21 0 2.192-1.61 2.192-3.594 0-1.984-.982-3.593-2.192-3.593-1.211 0-2.193 1.609-2.193 3.593 0 1.985.982 3.594 2.193 3.594zM31.515 19.432c1.21 0 2.192-1.61 2.192-3.594 0-1.984-.982-3.593-2.192-3.593-1.211 0-2.193 1.609-2.193 3.593 0 1.985.982 3.594 2.193 3.594z"
        fill="#000"
      />
      <Path
        d="M17.43 30.504a5.56 5.56 0 015.65-4.26 5.757 5.757 0 015.758 4.26"
        stroke="#5B0600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_994_18705"
          x1={3.09435}
          y1={35.4071}
          x2={43.1722}
          y2={12.269}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EBB34D" />
          <Stop offset={0.03} stopColor="#ECB64D" />
          <Stop offset={0.18} stopColor="#EEC04F" />
          <Stop offset={0.55} stopColor="#F1CC51" />
          <Stop offset={1} stopColor="#F3D652" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default AverageEmojiIcon;
