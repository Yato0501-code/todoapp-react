//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  const onDelete = (todo) =>{
    console.log("Function Called for todo",todo);
  }
  let todos = [{
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
  }]
  return <>
  <Header title = "myToDoList"/>
  <Todos todos = {todos} onDelete={onDelete}/>
  <Footer />
  </>;
  
}

export default App;
