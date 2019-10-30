import { DINOSAUR_FETCHED } from '../actions';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case DINOSAUR_FETCHED:{
      return action.payload
    }
    default:
      return state
  }
}

export default reducer