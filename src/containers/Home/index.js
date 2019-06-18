import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LogIn from '../../components/LogIn'; 

class Home extends Component {
  render() {
    return (
      <div className="container">
        <LogIn />
      </div>
    )
  }
}
/* Home.propTypes = {
  authUser: PropTypes.func.isRequired,
}; */

/* const mapStateToProps = state => ({
  posts: state.posts.items
}); */

export default Home;