export const AddTodoAction = (data) => {
  return {
    type: 'ADD_TODO',
    payload: data,
    id: new Date().getTime().toString()
  }
}
export const DeleteTodoAction = (data) => {
  return {
    type: 'DELETE_TODO',
    payload: data.id
  }
}