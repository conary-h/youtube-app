import React, { Component, Fragment } from 'react';
import PropTypes  from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postActions';

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
      <Fragment>
        {posts}
      </Fragment>
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