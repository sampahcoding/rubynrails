import React from "react"
import PropTypes from "prop-types"
class SearchResult extends React.Component {
  render () {
    var buildBox = function(i) {
      var path = "https://picsum.photos/200/200/?image=1" + i
      return <section className="columns-3 placing" key={i}>
                <h3>Title Photos</h3>
                <img className="--full" src={path}/>
                <p>test something to type in here bla bla bla bla</p>
            </section>
    }
    return (
      <div className="row">
        { [1,2,3,4,5,6,7,8,9,10,11,12].map(buildBox) }
      </div>
    );
  }
}



SearchResult.propTypes = {
  greeting: PropTypes.string
};
export default SearchResult
