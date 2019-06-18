import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';
import execute, { authenticate, loadClient } from '../../config/ytconfig';


class Home extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  _renderPostItemList = ({ data = [] }) => {
    return data.map(post => {
      return <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    });
  };

  render() {
    const posts = this._renderPostItemList(this.props.posts);
    return (
      <div className="container">
        {posts}
        <p>ijgijifjiosahfhnafusnifnduhfi</p>
        <button onClick={authenticate}>Sign In</button>
        <button onClick={execute}>Execute</button>
      </div>
    )
  }
}
Home.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Home);