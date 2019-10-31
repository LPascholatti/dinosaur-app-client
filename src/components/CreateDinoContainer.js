import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createDino } from '../actions'
import CreateDinoForm from './CreateDinoForm'

class CreateDinoContainer extends Component {

  state = {
    name: '',
    description: '',
    image: '',
    weight: '',
    height: '',
    region: '',
    geological_era: ''
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.createDino(this.state)
    this.setState({
      name: '',
      description: '',
      image: '',
      weight: '',
      height: '',
      region: '',
      geological_era: ''
    })
  }

  render() {
    return (<CreateDinoForm
      onSubmit={this.onSubmit}
      onChange={this.onChange}
      values={this.state}
    />
    )
  }
}

const mapStateToProps = state => ({
  dinosaur: state.dinosaur
})

export default connect(mapStateToProps, { createDino })(CreateDinoContainer)
