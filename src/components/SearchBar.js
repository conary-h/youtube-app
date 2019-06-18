import React from 'react';
import { reduxForm, Field } from 'redux-form';

 let SearchBar = () => {
  return (
    <form>
        <Field name="searchKeyWord" component="input"/>
    </form>
  )
}

SearchBar = reduxForm({
  form: 'searchForm'
})(SearchBar)

export default SearchBar;
