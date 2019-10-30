import React, { Component } from 'react'
import { getDino } from '../actions'
import DinosaurDetails from './DinosaurDetails'
import { connect } from 'react-redux'

class DinosaurDetailsContainer extends Component {

  componentDidMount() {
    this.props.getDino(Number(this.props.match.params.id))
  }

  render() {
    return <DinosaurDetails
    dinosaur={this.props.dinosaur}
    />
  }
}

const mapStateToProps = state => {
  return {
    dinosaur: state.dinosaur
  }
}

export default connect(mapStateToProps, {getDino})(DinosaurDetailsContainer)
