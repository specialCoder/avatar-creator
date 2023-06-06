import {
  faceColorsMap,
  backgroundColorsMap,
  hairColorsMap,
  mustachesColorsMap,
  bodyColorsMap
} from "./colors";
import Background from "./components/Background";
import Body from "./components/Body";
import Eyes from "./components/Eyes";
import Face from "./components/Face";
import Glasses from "./components/Glasses";
import Hair from "./components/Hair";
import Mouth from "./components/Mouth";
import Mustaches from "./components/Mustaches";

const defaultProps = {
  viewBoxSize: 64,
  background: ["Yes", "LightBlue"],
  face: ["Normal", "Yellow"],
  eyes: ["Normal", ""],
  hair: ["Classic01", "Black"],
  mouth: ["Default", ""],
  mustaches: ["PencilThin", "Black"],
  glasses: ["Normal", ""],
  body: ["Golf", "Orange"]
};

const AvatarCreator = (props = defaultProps) => {
  const {
    viewBoxSize,
    background = [],
    face = [],
    eyes = [],
    hair = [],
    mouth = [],
    mustaches = [],
    glasses = [],
    body = []
  } = props;

  const BackgroundLayer = Background[background[0] || "Default"];
  const FaceLayer = Face[face[0] || "Normal"];
  const EyesLayer = Eyes[eyes[0] || "Normal"];
  const HairLayer = Hair[hair[0] || "Classic01"];
  const MouthLayer = Mouth[mouth[0] || "Default"];
  const MustachesLayer = Mustaches[mustaches[0] || "Freddy"];
  const GlassesLayer = Glasses[glasses[0] || "Normal"];
  const BodyLayer = Body[body[0] || "Golf"];

  return (
    <>
      <svg
        width="64"
        height="64"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath={ background[0] ? 'url(#myClip)' : ''} id="wrapper">
          {background[0] && (
            <BackgroundLayer {...(backgroundColorsMap[background[1]] || {})} />
          )}
          <FaceLayer {...(faceColorsMap[face[1]] || {})} />
          <EyesLayer />
          <HairLayer {...(hairColorsMap[hair[1]] || {})} />
          <MouthLayer />
          <MustachesLayer {...(mustachesColorsMap[mustaches[1]] || {})} />
          <GlassesLayer />
          <BodyLayer {...(bodyColorsMap[body[1]] || {})} />
        </g>
        <defs>
          BackgroundLayer
          <clipPath id="myClip">
            <BackgroundLayer
              {...(backgroundColorsMap[background[1]] || {})}
              fill="white"
              clip
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default AvatarCreator;
