const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + (action.payload || 0)
    case "DECREMENT":
      return state - (action.payload || 0)
    case "SET_COUNTER":
      return action.payload || 0
    default:
      return state
  }
}

export default counterReducer
