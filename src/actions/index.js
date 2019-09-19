export const changeImage = imageIndex => {
  return {
  type: 'CHANGE_IMAGE',
  imageIndex
}}

export const changeBtnText = buttonTextIndex => {
  return {
  type: 'CHANGE_TEXT',
  buttonTextIndex
}}
