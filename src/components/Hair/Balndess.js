const defaultProps = {
  color: "#1B0B47"
};

const Balndess = (props = {}) => {
  const { color } = { ...defaultProps, ...props };

  return (
    <g id="Hair_Balndess">
      <rect x="14" y="26" width="9" height="2" rx="1" fill={color} />
      <rect x="14" y="33" width="7" height="2" rx="1" fill={color} />
      <rect x="12" y="29" width="13" height="3" rx="1.5" fill={color} />
    </g>
  );
};

export default Balndess;
