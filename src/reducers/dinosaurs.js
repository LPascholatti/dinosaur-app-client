import { DINOSAURS_FETCHED, DINOSAUR_CREATE } from '../actions'

export default function (state = [], action = {}) {
  switch (action.type) {
    case DINOSAURS_FETCHED: {
      return action.payload
    }
    case DINOSAUR_CREATE: {
      return [action.payload, ...state]
    }
    default:
      return state
  }
}