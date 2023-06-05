/** 头像背景 */
const defaultProps = {
  cx: 32,
  cy: 32,
  r: 32,
  fill: "#fff",
  clip: false
};

const Background = (props = {}) => {
  const attributes = { ...defaultProps, ...props };

  return attributes.clip ? (
    <circle {...attributes} />
  ) : (
    <g id="Background">
      <circle {...attributes} />
    </g>
  );
};

export default Background;
