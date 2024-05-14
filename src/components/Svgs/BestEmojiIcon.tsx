import * as React from "react"
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function BestEmojiIcon(props) {
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
        d="M46.398 23.902c0-12.813-10.386-23.2-23.199-23.2C10.387.702 0 11.09 0 23.902 0 36.714 10.387 47.1 23.2 47.1c12.812 0 23.198-10.387 23.198-23.2z"
        fill="url(#paint0_linear_994_18697)"
      />
      <Path
        d="M13.93 26.982a39.657 39.657 0 0116.643 0s.287 10.708-8.32 10.708c-8.606 0-8.323-10.708-8.323-10.708z"
        fill="#5B0600"
      />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={13}
        y={26}
        width={18}
        height={12}
      >
        <Path
          d="M13.93 26.982a39.657 39.657 0 0116.643 0s.287 10.708-8.32 10.708c-8.606 0-8.323-10.708-8.323-10.708z"
          fill="#5B0600"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M24.425 43.947a5.742 5.742 0 10-4.364-10.623 5.742 5.742 0 004.364 10.623z"
          fill="#8E1112"
        />
      </G>
      <Path
        d="M16.41 17.972s-.59-2.265-3.415-2.26a3.555 3.555 0 00-3.406 2.26M33.46 17.972s-.59-2.264-3.42-2.26a3.555 3.555 0 00-3.416 2.26"
        stroke="#000"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_994_18697"
          x1={5.19019}
          y1={38.5303}
          x2={41.2158}
          y2={9.26952}
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

export default BestEmojiIcon;
