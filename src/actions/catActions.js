import "isomorphic-fetch"

export function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'})
    return fetch('http://localhost:3000/db')
      .then(response => {return (response.json())})
      .then(response => {
        dispatch({type: 'FETCH_CATS', payload: response.images});
      })

  };
}