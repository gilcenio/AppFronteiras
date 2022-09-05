import { Dimensions } from "react-native"

export function WindowHeight (number: any){
  const height = Dimensions.get('window').height * number
  const newHeight = height.toString()
  return parseInt(newHeight)+'px'
};