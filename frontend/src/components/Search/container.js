import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    searchByTerm: PropTypes.func.isRequired,
    userList: PropTypes.array,
    imageList: PropTypes.array
  };

  // 이 API는 컴포넌트가 화면에 나타나게 됐을때 호출됨
  componentDidMount() {
    const { searchByTerm } = this.props;
    searchByTerm();
  }

  // 이 API는 컴포넌트에서 render()를 호출하고 난 다음에 발생
  // 이 시점에서 this.props와 this.state가 바뀌어 있다
  componentDidUpdate = (prevProps, prevState) => {
    const { searchByTerm } = this.props;
    if (prevProps.match.params !== this.props.match.params) {
      searchByTerm();
    }
  };

  // 이 API는 컴포넌트가 새로운 props를 받게됐을때 호출됨
  // 이 안에서는 주로 state가 props에 따라 변해야 하는 로직을 작성
  componentWillReceiveProps = nextProps => {
    if (nextProps.userList && nextProps.imageList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { userList, imageList } = this.props;
    return (
      <Explore {...this.state} userList={userList} imageList={imageList} />
    );
  }
}

export default Container;
