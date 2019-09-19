import { connect } from 'react-redux';
import RaccoonImg from '../components/RaccoonImg';

const mapStateToProps = (state) => {
  return { imgURL: state.changeImage.imgURL };
}

export default connect(
  mapStateToProps
)(RaccoonImg)
