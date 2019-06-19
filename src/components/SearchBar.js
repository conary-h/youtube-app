import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions/videoActions';


class SearchBar extends Component {

  _required = (value) => {
    if(!value || value === '') {
      return 'Required Field.'
    }
  };
  onSubmit = (values) => {
    console.log(JSON.stringify(values));
    this.props.fetchVideos(values.searchKeyWord);
  };
  render() {
    const { handleSubmit, valid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field name="searchKeyWord" component="input" placeholder="Search" validate={this._required} />
        <button type="submit" disabled={!valid} className="search-btn">
          <i>Search</i>
        </button>
      </form>
    )
  }
}
SearchBar = reduxForm({
  form: 'searchForm',
})(SearchBar)

const mapStateToProps = state => ({
  searchTerm: state.form.searchForm
});
const mapDispatchToProps = dispatch => {
  return {
    fetchVideos: (searchTerm) => dispatch(fetchVideos(searchTerm)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
