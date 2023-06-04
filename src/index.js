import { faceColorsMap, backgroundColorsMap, hairColorsMap, mustachesColorsMap, bodyColorsMap } from "./colors"
import Background from "./components/Background"
import Body from './components/Body'
import Eyes from './components/Eyes'
import Face from './components/Face'
import Glasses from './components/Glasses'
import Hair from './components/Hair'
import Mouth from './components/Mouth'
import Mustaches from "./components/Mustaches"


const defaultProps = {
  viewBoxSize: 64,
  background: ['Yes', 'LightBlue'],
  face: ['Normal', 'Yellow'],
  eyes: ['Normal',''],
  hair: ['Classic01', 'Black'],
  mouth: ['Default',''],
  mustaches: ['PencilThin', 'Black'],
  glasses: ['Normal',''],
  body: ['Golf', 'Orange']
}

const AvatarCreator = (props = defaultProps) => {
  const {
    viewBoxSize,
    background,
    face,
    eyes,
    hair,
    mouth,
    mustaches,
    glasses,
    body
  } = props

  const FaceLayer = Face[face[0] || '']
  const EyesLayer = Eyes[eyes[0] || '']
  const HairLayer = Hair[hair[0] || '']
  const MouthLayer = Mouth[mouth[0] || '']
  const MustachesLayer = Mustaches[mustaches[0] || '']
  const GlassesLayer = Glasses[glasses[0] || '']
  const BodyLayer = Body[body[0] || '']

  return (
    <svg 
      width="64" 
      height="64" 
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
    {
      background[0] && <Background {...(backgroundColorsMap[background[1]] || {})}/>
    }
    {
      FaceLayer && <FaceLayer {...(faceColorsMap[face[1]] || {})}/>
    }
    {
      EyesLayer && <EyesLayer/>
    }
    {
      HairLayer && <HairLayer {...(hairColorsMap[hair[1]] || {})}/>
    }
    {
      MouthLayer && <MouthLayer />
    }
    {
      MustachesLayer && <MustachesLayer {...(mustachesColorsMap[mustaches[1]] || {})}/>
    }
    {
      GlassesLayer && <GlassesLayer />
    }
    {
      BodyLayer && <BodyLayer {...(bodyColorsMap[body[1]] || {})}/>
    }
    </svg>)
}

export default AvatarCreator