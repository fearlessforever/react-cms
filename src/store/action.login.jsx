import {
  CHANGE_ACCESSTOKEN
} from './type'

export const changeAT = function(value=''){
  return {
    type:CHANGE_ACCESSTOKEN,
    value
  }
}
