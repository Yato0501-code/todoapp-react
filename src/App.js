//import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Todos from "./components/Todos";

function App() {
  return <>
  <Header title = "myToDoList"/>
  <Todos />
  <Footer />
  </>;
}

export default App;
