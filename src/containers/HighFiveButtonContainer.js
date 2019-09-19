import { connect } from 'react-redux';
import { changeImage } from '../actions';
import { changeBtnText } from '../actions';
import HighFiveButton from '../components/HighFiveButton';

const mapStateToProps = (state) => {
  return { imageIndex: 
  state.changeImage.imageIndex,
  buttonText: state.buttonText };
}

const mapDispatchToProps = dispatch => ({
  changeImage: data => dispatch(changeImage(data)),
  buttonText: data => dispatch(changeBtnText(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighFiveButton)