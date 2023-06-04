const defaultProps = {
  earColor:'#F0BD70',
  neckColor:'#F0BD70',
  shadowColor:'#E9B05B',
  faceColor:'#FFCB7E',
  noseColor:'#F0BD70'
}

const Thin = ({
  earColor,
  neckColor,
  shadowColor,
  faceColor,
  noseColor
} = defaultProps) => <>
  <g clip-path="url(#clip0_92_378)" id="Face_Thin">
    <circle cx="18" cy="37" r="5" fill={earColor} id="Ear"/>
    <path id="Neck" d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill={neckColor}/>
    <path id="Shadow" d="M35.0002 53.8682C35.0002 59.5221 31.5 60 28.3832 58.9868C25.2665 57.9737 19 49.1539 19 43.5C19 37.8461 19.7841 38.0004 24.4131 38.0004C37.5002 38.5004 35.0002 48.2143 35.0002 53.8682Z" fill={shadowColor}/>
    <path id="Face" d="M45.8874 36.0992C45.8874 45.0216 42 55 35.5 56.5C26 55.5 17.43 45.0216 17.43 36.0992C15.0016 25.5 15.5015 13 32.0016 13C48.5016 13 45.8874 27.1767 45.8874 36.0992Z" fill={faceColor}/>
    <rect id="Nose" x="36" y="41" width="3" height="2" rx="1" fill={noseColor}/>
  </g>
  <defs>
  <clipPath id="clip0_92_378">
    <rect width="64" height="64" fill="white"/>
  </clipPath>
  </defs>
</>

export default Thin
