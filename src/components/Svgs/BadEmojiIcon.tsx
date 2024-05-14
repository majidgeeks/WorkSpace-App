import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

function BadImojiIcon(props) {
  return (
    <Svg
      width={47}
      height={48}
      viewBox="0 0 47 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.133 47.494c12.777 0 23.134-10.357 23.134-23.134 0-12.776-10.358-23.133-23.134-23.133S0 11.584 0 24.36c0 12.777 10.357 23.134 23.133 23.134z"
        fill="url(#paint0_linear_994_18710)"
      />
      <Path
        d="M28.238 24.83s.595 2.26 3.42 2.255a3.55 3.55 0 003.417-2.254M11.192 24.83s.59 2.26 3.416 2.255a3.55 3.55 0 003.42-2.254"
        stroke="#000"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.086 37.362s4.246-3.555 10.075 0"
        stroke="#5B0600"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.34.2s4.357 6.717 5.595 10.248c1.208 3.459.374 7.263-2.879 8.933a6.634 6.634 0 01-8.933-2.879c-1.003-1.957-.753-4.14 0-6.04C2.937 5.876 6.717.215 6.717.215a.36.36 0 01.48-.158A.35.35 0 017.34.2z"
        fill="url(#paint1_linear_994_18710)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_994_18710"
          x1={3.09436}
          y1={35.9319}
          x2={43.1722}
          y2={12.7938}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EBB34D" />
          <Stop offset={0.03} stopColor="#ECB64D" />
          <Stop offset={0.18} stopColor="#EEC04F" />
          <Stop offset={0.55} stopColor="#F1CC51" />
          <Stop offset={1} stopColor="#F3D652" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_994_18710"
          x1={6.95687}
          y1={20.11}
          x2={6.95687}
          y2={0.00383591}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#77AAF2" />
          <Stop offset={0.35} stopColor="#8FBAF4" />
          <Stop offset={0.74} stopColor="#A2C7F5" />
          <Stop offset={1} stopColor="#A9CCF6" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default BadImojiIcon;