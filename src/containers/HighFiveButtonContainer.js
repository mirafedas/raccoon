import { connect } from 'react-redux';
import { changeImage } from '../actions';
import HighFiveButton from '../components/HighFiveButton';

const mapStateToProps = (state) => {
  return { imageIndex: 
  state.changeImage.imageIndex };
}

const mapDispatchToProps = dispatch => ({
  changeImage: data => dispatch(changeImage(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HighFiveButton)