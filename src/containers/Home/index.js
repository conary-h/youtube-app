import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogIn from '../../components/LogIn';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    return (
      <div className="container">
        {
          this.props.isAuthenticated &&
          <LogIn />
        }
      </div>
    )
  }
}
/* Home.propTypes = {
  authUser: PropTypes.func.isRequired,
}; */

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

export default connect(mapStateToProps)(Home);