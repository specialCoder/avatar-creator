const defaultProps = {
  color: "#1B0B47"
};

const Slaughter = (props = {}) => {
  const { color } = { ...defaultProps, ...props };

  return (
    <g id="Hair_Slaughter">
      <g id="Shape">
        <path
          id="Shape_2"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 25C24 25.5305 23.8967 26.0368 23.7092 26.5C23.8967 26.9632 24 27.4695 24 28C24 30.2091 22.2091 32 20 32C20 34.2091 18.2091 36 16 36C13.7909 36 12 34.2091 12 32C12 30.9541 12.0652 29.2176 12.3683 27.6787C12.1319 27.1682 12 26.5995 12 26C12 23.7909 13.7909 22 16 22C16.4069 22 16.7996 22.0607 17.1695 22.1737C17.8935 21.4486 18.8944 21 20 21C22.2091 21 24 22.7909 24 25Z"
          fill={color}
        />
        <path
          id="Shape_3"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M45.8487 33.8946C47.6122 33.4775 48.9245 31.8929 48.9245 30.0019C48.9245 29.4714 48.8213 28.9651 48.6338 28.5019C48.8213 28.0387 48.9245 27.5323 48.9245 27.0019C48.9245 24.9882 47.4365 23.322 45.5 23.043C46.0928 26.1835 45.9824 29.6539 45.8819 32.8166C45.8703 33.1803 45.8589 33.54 45.8487 33.8946Z"
          fill={color}
        />
      </g>
    </g>
  );
};

export default Slaughter;
