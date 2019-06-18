import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { authUser } from '../actions/authActions';

function LogIn(props) {
  return (
    <Fragment>
        <h1 className="txt-center">Please log in</h1>
        <div className="login-option google txt-center" onClick={props.authUser}>
          Google Account
        </div>
    </Fragment>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser()),
  }
};

export default connect(null, mapDispatchToProps)(LogIn);