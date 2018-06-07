import { connect } from "react-redux"; // 컴포넌트를 리덕스 스토어에 연결
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const {
    user,
    routing: { location }
  } = state;
  return {
    isLoggedIn: user.isLoggedIn,
    pathname: location.pathname
  };
};

export default connect(mapStateToProps)(Container);
