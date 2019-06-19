import React from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/authActions';

function LogIn(props) {
  return (
    <div className="login-wrapper ib">
        <h1 className="txt-center">Please log in</h1>
        <div className="login-option google txt-center" onClick={props.authUser}>
          Google Account
        </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser()),
  }
};

export default connect(null, mapDispatchToProps)(LogIn);