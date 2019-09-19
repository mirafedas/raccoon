import high from "../img/high.jpg";
import images from "../img/images.jpeg";

const imgURLs = [
  images,
  high,
]

const buttonTextArr = [
  'High five',
  'Go back'
]

const initialState = {
  imageIndex: 0,
  imgURL: imgURLs[0]
};

const initialBtnText = {
  buttonText: buttonTextArr[0],
  buttonTextIndex: 0
}

export const changeBtnText = (state = initialBtnText, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      let { buttonTextIndex } = action;
      if (buttonTextIndex >= buttonTextArr.length) {
        buttonTextIndex = 0;
      }
      return {
        ...state,
        buttonText: buttonTextArr[buttonTextIndex],
        buttonTextIndex
      }
    default:
      return state
  }
}

const changeImageURL = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_IMAGE':
      let { imageIndex } = action;
      if (imageIndex >= imgURLs.length) {
        imageIndex = 0;
      }
      
      return {
        ...state,
        imgURL: imgURLs[imageIndex],
        imageIndex
      }
    default:
      return state
  }
}

export default changeImageURL;