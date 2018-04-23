import React from "react"
import PropTypes from "prop-types"

class SearchForm extends React.Component {
  render () {
    return (
      <div className="flexwrapper">
        <div className="flex-columns-8 input-icon --big">
          <input name="q" placeholder="Search for..." className="--big"/>
          <i className="material-icons">search</i>
        </div>
      </div>
    );
  }
}



SearchForm.propTypes = {
};
export default SearchForm
