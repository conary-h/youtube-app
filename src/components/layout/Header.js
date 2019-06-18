import React from 'react'
import SearchBar from '../../components/SearchBar';
import logo from '../../youtube-icon.png';


export default function Header() {
  return (
    <div className="header">
      <div className="logo-wrapper ib">
        <img src={logo} className="img-responsive" alt="logo"/>
        <span className="logo-text">Video Fetcher</span>
      </div>
      <div className="search-wrapper ib">
        <SearchBar />
      </div>
    </div>
  )
}
