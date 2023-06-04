/** 头像背景 */
const defaultProps = {
  cx:32,
  cy:32,
  r:32,
  fill:'#fff'
}

const Background = (props = {}) => 
<g id="Background">
  <circle {...defaultProps} {...props}/>
</g>

export default Background;
