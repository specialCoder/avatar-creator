/** 颜色配置 */

// 组件-色值可选项 对应
export const colorsMap = {
  Background: backgroundColors,
  Body: bodyColors,
  Face: faceColors,
  Mustaches: mustachesColors,
  Hair: hairColors
}

export const transformOptionToMap = (list) => list.reduce((pre,{ label, value}) => {
  pre[label] = value
  return pre
}, {})

// 头像背景-颜色变量 作为对应组件的属性传入
export const backgroundColors = [
  {
    label:'Purple',
    value:{
      fill:'#6F6FFB'
    }
  },
  {
    label:'LightBlue',
    value:{
      fill: '##68DBF2'
    }
  },
  {
    label:'Grey',
    value:{
      fill: '##E4ECF7'
    }
  },
  {
    label:'Rose',
    value: {
      fill: '#FFBAF8'
    }
  },
  {
    label:'Red',
    value: {
      fill: '##F16063'
    }
  },
  {
    label:'Green',
    value: {
      fill: '##70E0BF'
    }
  },
  {
    label:'PurposeUI',
    value: {
      fill: '#4C6FFF'
    }
  }
]

export const backgroundColorsMap = transformOptionToMap(backgroundColors)

// 躯干部分-颜色变量
export const bodyColors = [
  {
    label:'Orange',
    value:{
     bodyColor:'#E05A33',
     neckShadow:'#C53926'
    }
  },
  {
    label:'Blue',
    value:{
      bodyColor:'#3633E0',
      neckShadow:'#362ABC'
    }
  },
  {
    label:'pink',
    value:{
      bodyColor:'#FF4DD8',
      neckShadow:'#D2499B'
    }
  }
]

export const bodyColorsMap = transformOptionToMap(bodyColors)

// 脸部颜色变量
export const faceColors = [
  {
    label:'Yellow',
    value:{
      earColor:'#F0BD70',
      neckColor:'#F0BD70',
      shadowColor:'#E9B05B',
      faceColor:'#FFCB7E',
      noseColor:'#F0BD70'
    }
  },
  {
    label:'Dark',
    value:{
      earColor:'#836055',
      neckColor:'#836055',
      shadowColor:'#553329',
      faceColor:'#836055',
      noseColor:'#68463C'
    }
  },
  {
    label:'White',
    value:{
      earColor:'#EAC0B3',
      neckColor:'#EAC0B3',
      shadowColor:'#C99688',
      faceColor:'#F5D0C5',
      noseColor:'#EAC0B3'
    }
  }
]

export const faceColorsMap = transformOptionToMap(faceColors)

// 头发颜色变量
export const hairColors = [
  {
    label:'Brown',
    value:{
      color:'#47280B'
    }
  },
  {
    label:'Black',
    value:{
      color:'#1B0B47'
    }
  },
  {
    label:'Red',
    value:{
      color:'#AD3A20'
    }
  }
]

export const hairColorsMap = transformOptionToMap(hairColors)

export const mustachesColors = [
  {
    label:'Black',
    value: {
      color:'#1B0B47'
    }
  },
  {
    label:'Brown',
    value: {
      color:'#321E0B'
    }
  },
  {
    label:'Red',
    value: {
      color:'#AD3A20'
    }
  }
]

export const mustachesColorsMap = transformOptionToMap(mustachesColors)