const defaultProps = {
  bodyColor: "#E05A33"
};

const TShirt = (props = {}) => {
  const { bodyColor } = { ...defaultProps, ...props };

  return (
    <>
      <g clipPath="url(#clip0_166_50)" id="Body_TShirt">
        <rect x="7" y="60" width="40" height="23" rx="9" fill={bodyColor} />
      </g>
      <defs>
        <clipPath id="clip0_166_50">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
};

export default TShirt;
