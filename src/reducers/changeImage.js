import high from "../img/high.jpg";
import images from "../img/images.jpeg";

const imgURLs = [
  images,
  high,
]

const initialState = {
  imageIndex: 0,
  imgURL: imgURLs[0]
};

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