import React, {useState} from "react"; 
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({toDos, addTodo}) {
  const [text, setText] = useState('');
  
  function onChange(e){
    setText(e.target.value);
  };
  
  function onSubmit(e) {
    e.preventDefault();
    setText('');
    addTodo(text)
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{toDos.map(todo => <ToDo {...todo} key={todo.id}/>)}</ul>
    </>
  )
}

// currentState
function mapStateToProps(state){
  return {toDos: state};
}

// DispatchProp
function mapDispatchToProps(dispatch){
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text))
  }
}

//connect()는 currentState 혹은 DispatchProp에서 리턴하는 값을 Home컴포넌트에 props를 보낼수 있도록 해준다.
export default connect(mapStateToProps, mapDispatchToProps)(Home);