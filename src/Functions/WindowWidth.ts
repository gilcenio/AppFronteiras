import { Dimensions } from "react-native"

export function WindowWidth (number: any){
  const width = Dimensions.get('window').width * number
  const newWidth = width.toString()
  return parseInt(newWidth)+'px'
};
