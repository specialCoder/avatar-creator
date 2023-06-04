const defaultProps = {
  earColor:'#F0BD70',
  neckColor:'#F0BD70',
  shadowColor:'#E9B05B',
  faceColor:'#FFCB7E',
  noseColor:'#F0BD70'
}

const Normal = ({
  earColor,
  neckColor,
  shadowColor,
  faceColor,
  noseColor
} = defaultProps) => <>
<g id="Face_Normal" clip-path="url(#clip0_92_380)">
  {/* <g id="Head"> */}
  <circle id="Ear" cx="18" cy="37" r="5" fill={earColor}/>
  <path id="Neck" d="M18 41H35V65.8705C35 65.8705 31.3571 68 26.5 68C21.6429 68 18 64.5226 18 64.5226V41Z" fill={neckColor}/>
  <path id="Shadow" d="M34.8114 53.1122C34.8114 58.4968 33.9402 57.9871 28.2776 57.9871C22.6151 57.9871 20.0016 53.6219 20.0016 48.2373C20.0016 42.8526 19.7867 38 24.3574 38C37.2799 38.4762 34.8114 47.7275 34.8114 53.1122Z" fill={shadowColor}/>
  <path id="Face" d="M45.8874 36.0992C45.8874 45.0216 44.5016 55.9932 33.5016 55.9932C22.5015 55.9932 17.43 45.0216 17.43 36.0992C15.0016 25.5 15.5015 13 32.0016 13C48.5016 13 45.8874 27.1767 45.8874 36.0992Z" fill={faceColor}/>
  <rect id="Nose" x="36" y="41" width="3" height="2" rx="1" fill={noseColor}/>
  {/* </g> */}
</g>
<defs>
<clipPath id="clip0_92_380">
<rect width="64" height="64" fill="white"/>
</clipPath>
</defs>
</>

export default Normal