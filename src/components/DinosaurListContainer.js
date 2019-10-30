import React, { Component } from 'react'
import { getDinos } from '../actions'
import { connect } from 'react-redux'
import DinosaurList from './DinosaurList'

class DinosaurListContainer extends Component {

  componentDidMount() {
    this.props.getDinos()
  }

  render() {
    return (
      <DinosaurList 
      dinosaurs={this.props.dinosaurs}
      />
    )
  }
}

const mapStateToProps = state => ({
  dinosaurs: state.dinosaurs,
})

export default connect(mapStateToProps, {getDinos})(DinosaurListContainer)
