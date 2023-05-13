import {legacy_createStore as createStore, combineReducers} from "redux";

const ADD = 'ADD';
const DELETE = 'DELETE';

export const addTodo = (text) => {
  return {
    type: ADD,
    text
  }
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    id
  }
}

const reducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      const newItem = {text: action.text, id: Date.now()};
      return [newItem, ...state];
    case DELETE:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;