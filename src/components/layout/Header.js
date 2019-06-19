import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import logo from '../../youtube-icon.png';
import { connect } from 'react-redux';
import { logOutUser } from '../../actions/authActions';

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo-wrapper ib">
          <img src={logo} className="img-responsive" alt="logo"/>
          <span className="logo-text">Video Fetcher</span>
        </div>
      </Link>
      {
        props.isAuthenticated
        ? (
          <Fragment>
            <div className="search-wrapper ib">
              <SearchBar />
            </div>

            <div className="logout-wrapper ib">
              <a className="logout-button" onClick={props.logOutUser}>LOG OUT</a>
            </div>
            </Fragment>
        )
        : null
      }
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});
const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch(logOutUser()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
