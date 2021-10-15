const initialState = []
export const addTodoReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO' :
      return [ ...state, action.payload ] 
    case 'DELETE_TODO' :
      const newState = state.filter((todo) => todo.id !== action.id)
      console.log(newState)
      return [ ...state,] 
      
      default :
      return state;
  }
}