import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { authUser } from '../../actions/authActions';
import execute, { authenticate, loadClient } from '../../config/ytconfig';


class Home extends Component {
  render() {
    return (
      <div className="container">
        <p>ijgijifjiosahfhnafusnifnduhfi</p>
        <button onClick={this.props.authUser}>Sign In</button>
        <button onClick={execute}>Execute</button>
      </div>
    )
  }
}
Home.propTypes = {
  authUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser())
  }
};

export default connect(null, mapDispatchToProps)(Home);