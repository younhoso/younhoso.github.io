import React, {useState} from "react"; 
import { connect } from "react-redux";

function Home({toDos}) {
  const [text, setText] = useState('');
  
  function onChange(e){
    setText(e.target.value);
  }
  
  function onSubmit(e) {
    e.preventDefault();
    setText('');
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  )
}

// currentState
function mapStateToProps(state){
  return {toDos: state};
}

export default connect(mapStateToProps)(Home); //connect()는 Home으로 보내는 props에 추가될 수 있도록 해준다.