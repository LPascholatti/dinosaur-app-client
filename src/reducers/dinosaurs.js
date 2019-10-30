import { DINOSAURS_FETCHED } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case DINOSAURS_FETCHED: {
      return action.payload
    }
    default:
      return state
  }
}