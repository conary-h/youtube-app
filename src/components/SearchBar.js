import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

 let SearchBar = (props) => {
  const _onChangeSearchInput = () => {
    console.log('onchange');
    console.log(props.searchTerm);
  };
  return (
    <form>
        <Field name="searchKeyWord" component="input" placeholder="Search" onChange={_onChangeSearchInput}/>
        <button className="search-btn">
          <i>S</i>
        </button>
    </form>
  )
}

SearchBar = reduxForm({
  form: 'searchForm'
})(SearchBar)

const mapStateToProps = state => ({
  searchTerm: state.form.searchForm
});

export default connect(mapStateToProps)(SearchBar);
