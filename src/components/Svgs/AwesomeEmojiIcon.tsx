import * as React from "react"
import Svg, {
  Path,
  Mask,
  G,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function AwesomeEmojiIcon (props) {
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
        fill="url(#paint0_linear_994_18689)"
      />
      <Path
        d="M10.025 25.438a97.362 97.362 0 0126.209 0S36.689 37.1 23.132 37.1c-13.558 0-13.107-11.662-13.107-11.662z"
        fill="#5B0600"
      />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={10}
        y={24}
        width={27}
        height={14}
      >
        <Path
          d="M10.025 25.438a97.362 97.362 0 0126.209 0S36.689 37.1 23.132 37.1c-13.558 0-13.107-11.662-13.107-11.662z"
          fill="#5B0600"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          d="M23.132 42.862c6.141 0 11.12-2.57 11.12-5.742s-4.979-5.743-11.12-5.743c-6.142 0-11.12 2.571-11.12 5.743 0 3.171 4.978 5.742 11.12 5.742z"
          fill="#8E1112"
        />
      </G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.057 9.674a3.3 3.3 0 00-2.399 2.672 3.305 3.305 0 00-3.397-1.19 2.936 2.936 0 00-2.154 3.646c.576 2.255 3.488 3.43 7.676 5.925 2.495-4.212 4.481-6.645 3.905-8.9a2.94 2.94 0 00-3.646-2.153h.015z"
        fill="url(#paint1_linear_994_18689)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.904 9.673a2.936 2.936 0 00-3.642 2.155c-.575 2.254 1.41 4.687 3.9 8.899 4.213-2.495 7.125-3.67 7.677-5.925a2.946 2.946 0 00-2.16-3.646 3.296 3.296 0 00-3.391 1.19 3.302 3.302 0 00-2.399-2.673h.015z"
        fill="url(#paint2_linear_994_18689)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_994_18689"
          x1={0.781333}
          y1={17.8504}
          x2={45.4818}
          y2={29.8287}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#EBB34D" />
          <Stop offset={0.03} stopColor="#ECB64D" />
          <Stop offset={0.18} stopColor="#EEC04F" />
          <Stop offset={0.55} stopColor="#F1CC51" />
          <Stop offset={1} stopColor="#F3D652" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_994_18689"
          x1={7.7159}
          y1={17.0255}
          x2={19.3203}
          y2={14.0525}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D2254D" />
          <Stop offset={1} stopColor="#D65C4E" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_994_18689"
          x1={40.7207}
          y1={20.0302}
          x2={29.1009}
          y2={17.0354}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#D2254D" />
          <Stop offset={1} stopColor="#D65C4E" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default AwesomeEmojiIcon;
