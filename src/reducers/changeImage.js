const imgURLs = [
  'high.jpg',
  'images.jpg',
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