//import logo from './logo.svg';
import "./App.css";
import AddTodo from "./components/AddTodo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";
import React,{useState} from "react";

function App() {
  const onDelete = (todo) =>{
    console.log("Function Called for todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc) => {
    console.log("its working, adding",title,desc);
    let sno = todos[todos.length - 1].sno +1;
    const myTodo = {
      sno : sno,
      title : title,
      desc : desc,
    }
    setTodos([...todos,myTodo])
  }

  const [todos , setTodos] = useState([
  {
    sno : 1,
    title : "xyz",
    desc : "xyz desc"
  },{
    sno : 2,
    title : "abc",
    desc : "abc desc"
  },{
    sno : 3,
    title : "efg",
    desc : "efg desc"
  }
])
  return <>
  <Header title = "myToDoList"/>
  <AddTodo addTodo={addTodo}/>
  <Todos todos = {todos} onDelete={onDelete}/>
  <Footer />
  </>;
  
}

export default App;
