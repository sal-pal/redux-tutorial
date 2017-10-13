import { createStore } from 'redux'

//Create reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

//Create store and update UI to state changes
let store = createStore(counter)
store.subscribe(function() {
  console.log(store.getState())
})

//Dispatch actions
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch( {type: 'DECREMENT'} )
