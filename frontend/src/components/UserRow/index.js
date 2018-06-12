import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  const { user } = ownProps;
  return {
    handleClick: (userId, following) => {
      if (user.following) {
        dispatch(userActions.unfollowUser(user.id));
      } else {
        dispatch(userActions.followUser(user.id));
      }
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
