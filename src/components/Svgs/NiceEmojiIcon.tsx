import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function NiceEmojiIcon(props) {
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
        fill="url(#paint0_linear_994_18716)"
      />
      <Path
        d="M17.29 17.398s-.59-2.265-3.416-2.26a3.555 3.555 0 00-3.42 2.26M34.33 17.398s-.594-2.265-3.42-2.26a3.55 3.55 0 00-3.416 2.26"
        stroke="#000"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.33 28.019s6.19 3.838 12.642 0"
        stroke="#5B0600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_994_18716"
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

export default NiceEmojiIcon;
