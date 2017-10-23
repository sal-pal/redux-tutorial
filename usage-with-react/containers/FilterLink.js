import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'


const mapStateToProps = function(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}


const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onClick: function() {
      return dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)


export default FilterLink
