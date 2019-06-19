import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import logo from '../../youtube-icon.png';
import { connect } from 'react-redux';

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
        props.isAuthenticated &&
        <div className="search-wrapper ib">
          <SearchBar />
        </div>
      }
    </div>
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

export default connect(mapStateToProps)(Header);
