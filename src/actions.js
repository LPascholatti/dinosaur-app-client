import request from 'superagent'

export const baseUrl = 'http://127.0.0.1:8000/api/dinosaur/'

export const DINOSAURS_FETCHED = 'DINOSAURS_FETCHED'

const dinosaursFetch = dinosaurs => ({
  type: DINOSAURS_FETCHED,
  payload: dinosaurs
})

export const getDinos = () => (dispatch, getState) => {
  const state = getState()
  const { dinosaurs } = state

  if (!dinosaurs.length) {
    request(`${baseUrl}`)
    .then(response => {
      const action = dinosaursFetch(response.body)
      dispatch(action)
    })
    .catch(console.error)
  }
}