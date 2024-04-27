import * as React from "react"
import Svg, { Ellipse, G, Path, Defs } from "react-native-svg"
import SvgScaleView from "./SvgScaleView"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
interface BookingsIconProps{
    color1 : string
    color2 : string
    size : number
}

function BookingsLargeIcon({color1, color2, size}: BookingsIconProps) {
  return (
    <SvgScaleView size={size}>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 88 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <Ellipse opacity={0.2} cx={44} cy={80} rx={18} ry={7} fill="#FCFCFC" />
      <Ellipse opacity={0.2} cx={44} cy={80} rx={28} ry={11} fill="#FCFCFC" />
      <Ellipse cx={44} cy={80} rx={6} ry={2} fill="#B52337" />
      <G filter="url(#filter0_d_1012_10792)">
        <Path
          d="M72.316 39.658c0 15.827-14.763 27.79-28.658 37.342C28.895 67.447 15 55.485 15 39.658 15 23.83 27.83 11 43.658 11c15.827 0 28.658 12.83 28.658 28.658z"
          fill={color1}
        />
      </G>
      <Path
        d="M52.83 27.633c-.541-.421-2.061-1.212-3.147-.949-1.52.422-3.094 5.166-4.613 13.073-.38 1.897-.706 3.9-1.086 5.85-1.845.791-4.125 1.95-5.699 3.005-3.798 2.53-7.598 5.693-7.652 9.383-.054 2.003 1.465 3.373 3.637 3.373 3.039 0 5.915-1.58 8.249-4.111 4.559-4.902 5.265-12.071 8.087-22.614.76-2.846 1.628-5.113 2.388-6.22.162-.21.217-.263.217-.316 0-.158-.163-.316-.38-.474zm-12.048 27.41c-1.628 2.793-4.07 4.849-6.513 4.849-1.03 0-2.062-.633-2.008-1.95.054-2.53 3.528-5.799 6.838-7.854 1.194-.791 3.04-1.582 4.397-2.214-.598 2.53-1.412 5.007-2.714 7.169zM51.524 23.127c-.244-1.43.447-3.26 1.138-3.432.568-.114 1.746.686 2.112 1.373.122.228.203.572.163.686-.04.057-.082 0-.244.286-.366.515-1.097 1.887-1.178 2.803-.244.229-1.748-.287-1.992-1.716z"
        fill={color2}
      />
      <Defs></Defs>
    </Svg>
    </SvgScaleView>
  )
}

export default BookingsLargeIcon
