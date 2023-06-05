/** 身体部分 */
const defaultProps = {
  neckColor: "#E05A33",
  neckShadow: "#C53926",
  bodyColor: "#E05A33"
};

const Golf = (props = {}) => {
  const { neckColor, neckShadow, bodyColor } = { ...defaultProps, ...props };

  return (
    <>
      <g clipPath="url(#clip0_166_8)" id="Body_Golf">
        <rect x="7" y="60" width="40" height="23" rx="9" fill={bodyColor} />
        <path
          d="M17 58H36V61C36 61 31 62 26.5 62C22 62 17 61 17 61V58Z"
          fill={neckColor}
        />
        <path
          d="M17 58H36V60C36 60 33 61.5 26.5 61.5C20 61.5 17 60 17 60V58Z"
          fill={neckShadow}
        />
        <path
          d="M16.5 59C16.5 57.8954 17.3954 57 18.5 57H34.5C35.6046 57 36.5 57.8954 36.5 59C36.5 59 31.5 60 26.5 60C21.5 60 16.5 59 16.5 59Z"
          fill="#E05A33"
        />
      </g>
      <defs>
        <clipPath id="clip0_166_8">
          <rect width="64" height="64" fill="white" />
        </clipPath>
      </defs>
    </>
  );
};

export default Golf;
